import itertools
import math
import re
import subprocess
import sys
import tempfile
import time
from workline.mysql_tools.Table_Operation import Table_Testcase, Table_Function
from workline.assemble_tools.callable_processor import CallableProcessor


class Function_Object(object):

    def __init__(self, function_object):
        self.Id = function_object[0]
        self.Function_Content: str = function_object[1]
        self.SourceFun_Id = function_object[2]
        self.Mutation_Method = function_object[3]
        self.Mutation_Times = function_object[4]
        self.Remark = function_object[5]
        self.js_line_count = self.getJSfileSize(self.Function_Content, 10)
        self.var_line_count = self.count_var_lines(self.Function_Content)
        self.prefix_list = self.prefixList()

    # def __str__(self):
    #     return str(self.Function_Content)

    def count_var_lines(self, code: str):
        regex = r'function.*\n( {4}"use strict";\n)?( {4}var.*\n)*'

        matches = re.finditer(regex, code, re.MULTILINE)

        count = 0
        for matchNum, match in enumerate(matches, start=1):
            # print(match.group(0))

            for line in match.group(0).splitlines():
                count = count + 1
        return count

    def getJSfileSize(self, code: str, cut_max_line: int) -> int:
        lines_list = code.splitlines()
        return min(len(lines_list), cut_max_line)

    def prefixList(self):
        prefix_list = []
        for prefix_line in range(self.var_line_count, self.js_line_count):
            # Got the prefix
            function_prefix = self.getPrefix(self.Function_Content, prefix_line)
            prefix_list.append(function_prefix)
        return prefix_list

        # Function_content, SourceFun_id, Mutation_method, Remark

    def gpt_replace_block(self, prefix_line, function):

        orginal_block_list = self.analysis_js_block(self.Function_Content)
        # print(orginal_block_list)
        gpt_block_list = self.analysis_js_block(function)
        # print(gpt_block_list)

        block_num = self.fineBlockIdx(gpt_block_list, prefix_line + 1)

        try:

            orginal_block_list_copy = orginal_block_list.copy()

            orginal_block_list_copy[block_num - 1] = gpt_block_list[block_num - 1]

            code_string = ''
            for block in orginal_block_list_copy:
                code_string += block
            return code_string + '\n'
        except:
            pass

    def getPrefix(self, code: str, cut_line: int):
        lines_list = code.splitlines(True)
        line_list_cut = lines_list[0:cut_line]
        function_cut = ''
        for i in line_list_cut:
            function_cut += i
        # print(function_cut)
        # print('--')
        return function_cut

    def fineBlockIdx(self, gpt_block_list, gpt_line_num):

        block_count = 0
        line_count = 0

        for idx, block in enumerate(gpt_block_list):
            line_count = len(block.splitlines()) + line_count

            # print(block, line_count)

            if gpt_line_num <= line_count:
                block_count = idx
                break

        return block_count + 1

    def analysis_js_block(self, code) -> list:
        block_list = []
        regex = r'(^ {4})([^} ].*)([^;]$)\n(.*\n)*? {4}}((\))?)(;?)$\n|^ {4}\w+.*;$\n|function.*\n|^}| {4}"use strict"\n;| {4}for.*{}\n'
        matches = re.finditer(regex, code, re.MULTILINE)
        for matchNum, match in enumerate(matches, start=1):
            block_list.append(match.group())
        return block_list

    def gpt_mutation_3(self, sess):
        print("2.正在使用变量替换变异")
        start_time = time.time()

        Function_Content_line_list = self.Function_Content.splitlines(True)

        var_number = self.countVarNumber(Function_Content_line_list)
        if var_number:
            all_functions = self.function_generate(Function_Content_line_list[0], sess)

            varSet = []
            for function in all_functions:
                # print(function)
                # print("-" * 100)
                for line in function.splitlines():
                    value = self.getVar(line)
                    if value:
                        varSet.append(value)

                        if len(varSet) > 10:
                            varSet = varSet[:10]

            varSet = set(varSet)

            all_functions_replace_block_pass = set()

            if varSet:
                if var_number < 5:
                    code_list = self.ReplacevalueStatement(Function_Content_line_list, varSet, var_number)

                    all_functions_replace_block_pass = self.jshint_check_function(code_list)

                    function_list_to_write = makeFunctionListToWrite(
                        all_functions=all_functions_replace_block_pass,
                        SourceFun_id=self.Id,
                        mutation_type=3,
                        mutation_times=0,
                        Remark=None)

                    write_to_Table_function(function_list_to_write)

            end_time = time.time()

            print(
                f"generated{len(all_functions_replace_block_pass)}GPT variable replacement case, total time{int(end_time - start_time)}seconds.")

        else:
            print(f'Use case{self.Id}No variable definition, skip variable substitution variants')

    def ReplacevalueStatement(self, test_str_line_list, valset, var_number):

        replaceLineDictList = []

        valsetList = list(valset)

        iterTimes = var_number

        iterPlan = set()

        for c in itertools.permutations(valsetList, iterTimes):
            iterPlan.add(c)

        for c in itertools.combinations_with_replacement(valsetList, iterTimes):
            iterPlan.add(c)

        for item in iterPlan:
            # print(item)
            item_iter = iter(item)

            regex = r'^ {4}var \S+ = \S+;\n'
            replaceLineDict = {}
            for old_value_statement_idx, line in enumerate(test_str_line_list):
                # matches = re.finditer(regex, line, re.MULTILINE)
                matches = re.search(regex, line, re.MULTILINE)
                if matches:
                    old_value_statement = matches.group()
                    valset_Choice = next(item_iter)
                    value = old_value_statement.split('= ')[1].split(';')[0]

                    new_value_statement = old_value_statement.replace(value, valset_Choice)

                    replaceLineDict[old_value_statement_idx] = new_value_statement

            replaceLineDictList.append(replaceLineDict)
            # print(replaceLineDictList)

        codeList = []
        if replaceLineDictList:
            for replaceLineDict in replaceLineDictList:
                # print(replaceLineDict)
                test_str_line_list_copy = self.replaceLine(test_str_line_list, replaceLineDict)
                code_string = ''
                for block in test_str_line_list_copy:
                    code_string = code_string + block
                codeList.append(code_string)
                # return code_string

        return codeList

    def getVar(self, line):
        # regex = r'^ {4}var .* = .*;$'
        regex = r'^ {4}var \S+ = \S+;'

        matches = re.search(regex, line, re.MULTILINE)
        if matches:
            # print(line)
            old_value_statement = matches.group()
            value = old_value_statement.split('= ')[1].split(';')[0]
            return value

    def countVarNumber(self, test_str_line_list):

        regex = r'^ {4}var \S+ = \S+;\n'

        count = 0

        for old_value_statement_idx, line in enumerate(test_str_line_list):
            # matches = re.finditer(regex, line, re.MULTILINE)
            matches = re.search(regex, line, re.MULTILINE)
            if matches:
                count = count + 1
        return count

    def replaceLine(self, test_str_line_list, replaceLineDict):
        test_str_line_list_copy = test_str_line_list.copy()
        for old_value_statement_idx, new_value_statement in replaceLineDict.items():
            test_str_line_list_copy[old_value_statement_idx] = new_value_statement
        return test_str_line_list_copy

    def makeTestcasesListToWrite(self, all_testcases, SourceFun_id, SourceTestcase_id, Fuzzing_times,
                                 Mutation_method, Mutation_times, Interesting_times, engine_coverage,
                                 Engine_coverage_integration_source, Engine_coverage_integration_all, Probability,
                                 Remark) -> list:

        lis = []

        for testcase in all_testcases:
            Testcases_content = testcase
            item = [Testcases_content, SourceFun_id, SourceTestcase_id, Fuzzing_times, Mutation_method,
                    Mutation_times, Interesting_times, engine_coverage,
                                  Engine_coverage_integration_source, Engine_coverage_integration_all, Probability, Remark]
            lis.append(item)
        return lis

    def jshint_check_testcases(self, all_testcases):
        start_time = time.time()
        all_testcases_pass = set()
        for testcase in all_testcases:
            testcase_no_print = testcase[:testcase.rfind('\n')]
            # print(testcase_no_print)

            with tempfile.NamedTemporaryFile(delete=True) as tmpfile:
                temp_file_path = tmpfile.name
                # print(temp_file_name)  # /tmp/tmp73zl8gmn
                tmpfile.write(testcase_no_print.encode())
                tmpfile.seek(0)
                # tmpTxt = tmpfile.read().decode()
                # print(tmpTxt)
                result = self.cmd_jshint(temp_file_path)
                if result:
                    all_testcases_pass.add(testcase)

        end_time = time.time()

        return all_testcases_pass

    def cmd_jshint(self, temp_file_path):
        # cmd = ['timeout', '60s', 'jshint', temp_file_path]
        cmd = ['timeout', '60s', 'jshint', '-c', '/root/Comfuzz/COMFUZZ_js/data/.jshintrc', temp_file_path]

        if sys.platform.startswith('win'):
            p = subprocess.Popen(cmd, stdout=subprocess.PIPE, shell=True)
        else:  # 假如是linux
            p = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        stdout, stderr = p.communicate()
        # if stdout:
        #     print(stdout)
        # if stderr:
        #     print("error")
        #     print(stderr)

        if stdout.__len__() > 0:
            jshint_flag = False
        else:
            jshint_flag = True
            # print(f"{file_path}right!")
        return jshint_flag

    def assemble_to_testcase(self, times):
        callable_processor = CallableProcessor()
        try:
            function_assemle_list = set()
            for i in range(times):
                function_assemle = callable_processor.get_self_calling(self.Function_Content)
                function_assemle_list.add(function_assemle)

            all_testcases_pass = self.jshint_check_testcases(function_assemle_list)

            testcases_list_to_write = self.makeTestcasesListToWrite(all_testcases_pass, self.Id, 0, 0, 0, 0, 0, None, None, None, 0, None)

            table_Testcase = Table_Testcase()

            table_Testcase.insertManyDataToTableTestcase(testcases_list_to_write)

            # print(function_assemle)
        except:
            pass


def makeFunctionListToWrite(all_functions, SourceFun_id, mutation_type, mutation_times, Remark) -> list:

    lis = []

    for function in all_functions:
        Function_content = function
        item = [Function_content, SourceFun_id, mutation_type, mutation_times, Remark]
        lis.append(item)
    return lis


def write_to_Table_function(*lis):
    list_to_write = []

    for item in lis:
        list_to_write += item
    # print(list_to_write)

    table_Function = Table_Function()
    table_Function.insertManyDataToTableFunction(list_to_write)
