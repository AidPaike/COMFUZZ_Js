# import os
# import sys
# from pathlib import Path
# BASE_DIR = str(Path(__file__).resolve().parent.parent.parent)
# sys.path.append(BASE_DIR)
import subprocess
import sys, re
import tempfile
from workline.harness_tools.harness_class import Harness
from workline.mysql_tools.Table_Operation import Table_Testcase, Table_Function
from workline.table_to_class.Table_Function_Class import Function_Object
from utils.worklineConfig import Hparams

hparams = Hparams().parser.parse_args()



class Testcase_Object(object):
    def __init__(self, Testcase_item):
        self.Id = Testcase_item[0]
        self.Testcase_context: str = Testcase_item[1]
        self.SourceFun_id = Testcase_item[2]
        self.SourceTestcase_id = Testcase_item[3]
        self.Fuzzing_times = Testcase_item[4]
        self.Mutation_method = Testcase_item[5]
        self.Mutation_times = Testcase_item[6]
        self.Interesting_times = Testcase_item[7]
        self.Engine_coverage: str = Testcase_item[8]
        self.Engine_coverage_integration_source: str = Testcase_item[9]
        self.Engine_coverage_integration_all: str = Testcase_item[10]
        self.Probability = Testcase_item[11]
        self.Remark = Testcase_item[12]
        self.source_function_object = self.get_function_content()
        self.testcase_list = self.getAllTestcase_list()

    def getAllTestcase_list(self):
        if self.SourceTestcase_id == 0:
            return None
        else:
            otherTestcaseFromSameSourceTestcase = [self.SourceTestcase_id]
            for item in Table_Testcase().selectSourceTestcaseIdFromTableTestcase(self.SourceTestcase_id):
                otherTestcaseFromSameSourceTestcase.append(item[0])
            return otherTestcaseFromSameSourceTestcase

    def engine_run_testcase(self, timeout="30"):
        harness = Harness()
        harness_result = harness.run_testcase(self.SourceFun_id, self.Id, self.Testcase_context,
                                              timeout)

        self.Fuzzing_times += 1
        return harness_result
        # pass

    def update_fuzzing_times(self, num):
        self.Fuzzing_times = num

    def add_interesting_times(self, interesting_number):
        self.Interesting_times += interesting_number

    def update_fuzzing_times(self, interesting_number):
        self.Interesting_times = interesting_number

    def subtract_interesting_times(self, interesting_number):
        self.Interesting_times -= interesting_number

    def add_mutation_times(self, mutation_times):
        self.Mutation_times += mutation_times

    def jshint_check_testcases(self, all_testcases):
        all_testcases_pass = set()
        for testcase in all_testcases:
            testcase_no_print = testcase[:testcase.rfind('\n')]
            # print(testcase_no_print)

            with tempfile.NamedTemporaryFile(delete=True) as tmpfile:
                temp_file_path = tmpfile.name
                # print(temp_file_name)  # /tmp/tmp73zl8gmn
                tmpfile.write(testcase_no_print.encode())
                tmpfile.seek(0)
                result = self.cmd_jshint(temp_file_path)
                if result:
                    all_testcases_pass.add(testcase)

        return all_testcases_pass

    def cmd_jshint(self, temp_file_path):
        # cmd = ['timeout', '60s', 'jshint', temp_file_path]
        # cmd = ['timeout', '60s', 'jshint', '-c', '/root/COMFUZZ/COMFUZZ_js/data/.jshintrc', temp_file_path]
        cmd = ['timeout', '60s', 'jshint', '-c', hparams.cmd_jshint_dir, temp_file_path]
        if sys.platform.startswith('win'):
            p = subprocess.Popen(cmd, stdout=subprocess.PIPE, shell=True)
        else:
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
            # print(f"right!")
        return jshint_flag

    def mutation_method4(self, model):
        with tempfile.NamedTemporaryFile(delete=True) as tmpfile:
            temp_file_path = tmpfile.name
            # print(temp_file_name)  # /tmp/tmp73zl8gmn
            tmpfile.write(self.Testcase_context.encode())
            tmpfile.seek(0)
            # tmpTxt = tmpfile.read().decode()
            # print(tmpTxt)
            random_block_remove, while_if_swap, condition_code_add, replaceOperator, replace_similar_API, replace_return_API, proto_pollution, property_modification, hotspot_optimization = self.design_Testcase_Mutation(
                temp_file_path, model)
            # print(len(result))
            # for item in result:
            #     print(item)
            #     print('-----------------------------------------------------')

        random_block_remove_pass = self.jshint_check_testcases(random_block_remove)
        while_if_swap_pass = self.jshint_check_testcases(while_if_swap)
        condition_code_add_pass = self.jshint_check_testcases(condition_code_add)
        replaceOperator_pass = self.jshint_check_testcases(replaceOperator)
        replace_similar_API_pass = self.jshint_check_testcases(replace_similar_API)
        replace_return_API_pass = self.jshint_check_testcases(replace_return_API)
        proto_pollution_pass = self.jshint_check_testcases(proto_pollution)
        property_modification_pass = self.jshint_check_testcases(property_modification)
        hotspot_optimization_pass = self.jshint_check_testcases(hotspot_optimization)

        table_testcase = Table_Testcase()

        random_block_remove_pass_list_to_write = self.make_all_mutation_testcases_passListToWrite(
            random_block_remove_pass,
            self.SourceFun_id,
            self.Id, 0, 4, 0, 0, None, None, None, 0, None)
        while_if_swap_pass_list_to_write = self.make_all_mutation_testcases_passListToWrite(while_if_swap_pass,
                                                                                            self.SourceFun_id,
                                                                                            self.Id, 0, 5, 0, 0, None,
                                                                                            None, None, 0, None)
        condition_code_add_pass_list_to_write = self.make_all_mutation_testcases_passListToWrite(
            condition_code_add_pass,
            self.SourceFun_id,
            self.Id, 0, 6, 0, 0, None, None, None, 0, None)
        replaceOperator_pass_list_to_write = self.make_all_mutation_testcases_passListToWrite(replaceOperator_pass,
                                                                                              self.SourceFun_id,
                                                                                              self.Id, 0, 8, 0, 0, None,
                                                                                              None, None, 0, None)
        replace_similar_API_pass_list_to_write = self.make_all_mutation_testcases_passListToWrite(
            replace_similar_API_pass,
            self.SourceFun_id,
            self.Id, 0, 8, 0, 0, None, None, None, 0, None)
        replace_return_API_pass_list_to_write = self.make_all_mutation_testcases_passListToWrite(
            replace_return_API_pass,
            self.SourceFun_id,
            self.Id, 0, 9, 0, 0, None, None, None, 0, None)
        proto_pollution_pass_list_to_write = self.make_all_mutation_testcases_passListToWrite(proto_pollution_pass,
                                                                                              self.SourceFun_id,
                                                                                              self.Id, 0, 10, 0, 0,
                                                                                              None, None, None, 0,
                                                                                              None)
        property_modification_pass_list_to_write = self.make_all_mutation_testcases_passListToWrite(
            property_modification_pass,
            self.SourceFun_id,
            self.Id, 0, 11, 0, 0, None, None, None, 0, None)
        hotspot_optimization_pass_list_to_write = self.make_all_mutation_testcases_passListToWrite(
            hotspot_optimization_pass,
            self.SourceFun_id,
            self.Id, 0, 12, 0, 0, None, None, None, 0, None)

        table_testcase.insertManyDataToTableTestcase(random_block_remove_pass_list_to_write)
        table_testcase.insertManyDataToTableTestcase(while_if_swap_pass_list_to_write)
        table_testcase.insertManyDataToTableTestcase(condition_code_add_pass_list_to_write)
        table_testcase.insertManyDataToTableTestcase(replaceOperator_pass_list_to_write)
        table_testcase.insertManyDataToTableTestcase(replace_similar_API_pass_list_to_write)
        table_testcase.insertManyDataToTableTestcase(replace_return_API_pass_list_to_write)
        table_testcase.insertManyDataToTableTestcase(proto_pollution_pass_list_to_write)
        table_testcase.insertManyDataToTableTestcase(property_modification_pass_list_to_write)
        table_testcase.insertManyDataToTableTestcase(hotspot_optimization_pass_list_to_write)

        return random_block_remove_pass, while_if_swap_pass, condition_code_add_pass, replaceOperator_pass, replace_similar_API_pass, replace_return_API_pass, proto_pollution_pass, property_modification_pass, hotspot_optimization_pass

    def design_Testcase_Mutation(self, file_name, model):
        random_block_remove = []
        while_if_swap = []
        condition_code_add = []
        replaceOperator = []
        replace_similar_API = []
        replace_return_API = []
        proto_pollution = []
        property_modification = []
        hotspot_optimization = []

        # print(stderr1)
        if model == 'universal':
            pass
        elif model == 'special':
            pass
        else:
            model = 'both'
        if model == 'universal' or model == 'both':
            #     cmd1 = ['node', '/root/COMFUZZ/COMFUZZ_js/workline/mutator_testcase_tools/universal_mutation.js', '-f',
            #             file_name]
            cmd1 = ['node', hparams.universal_mutation_path, '-f',
                    file_name]
            pro1 = subprocess.Popen(cmd1, stdin=subprocess.PIPE, stdout=subprocess.PIPE,
                                    stderr=subprocess.PIPE, universal_newlines=True)
            stdout1, stderr1 = pro1.communicate()
            result1 = stdout1.split("------------------------------")
            for i in result1:
                i = i.strip()
                if i != "":
                    split_i = i.split("\n")
                    if split_i[-1] == "random_block_remove" and (i not in random_block_remove):
                        random_block_remove.append(i[:i.rfind('\n')])
                    elif split_i[-1] == "while_if_swap" and (i not in while_if_swap):
                        while_if_swap.append(i[:i.rfind('\n')])
                    elif split_i[-1] == "condition_code_add" and (i not in condition_code_add):
                        condition_code_add.append(i[:i.rfind('\n')])
                    elif split_i[-1] == "replaceOperator" and (i not in replaceOperator):
                        replaceOperator.append(i[:i.rfind('\n')])
        elif model == 'special' or model == 'both':
            # cmd2 = ['node', '/root/COMFUZZ/COMFUZZ_js/workline/mutator_testcase_tools/special_mutation.js', '-f',
            #         file_name]
            cmd2 = ['node', hparams.special_mutation_path, '-f',
                    file_name]
            pro2 = subprocess.Popen(cmd2, stdin=subprocess.PIPE, stdout=subprocess.PIPE,
                                    stderr=subprocess.PIPE, universal_newlines=True)
            stdout2, stderr2 = pro2.communicate()
            result2 = stdout2.split("------------------------------")
            for j in result2:
                j = j.strip()
                if (j != ""):
                    split_j = j.split("\n")
                    if split_j[-1] == "replace_similar_API" and (j not in replace_similar_API):
                        replace_similar_API.append(j[:j.rfind('\n')])
                    elif split_j[-1] == "replace_return_API" and (j not in replace_return_API):
                        replace_return_API.append(j[:j.rfind('\n')])
                    elif split_j[-1] == "proto_pollution" and (j not in proto_pollution):
                        proto_pollution.append(j[:j.rfind('\n')])
                    elif split_j[-1] == "property_modification" and (j not in property_modification):
                        property_modification.append(j[:j.rfind('\n')])
                    elif split_j[-1] == "hotspot_optimization" and (j not in hotspot_optimization):
                        hotspot_optimization.append(j[:j.rfind('\n')])
        return random_block_remove, while_if_swap, condition_code_add, replaceOperator, replace_similar_API, replace_return_API, proto_pollution, property_modification, hotspot_optimization

    def make_all_mutation_testcases_passListToWrite(self, all_mutation_testcases_pass, SourceFun_id, SourceTestcase_id,
                                                    Fuzzing_times,
                                                    Mutation_method, Mutation_times, Interesting_times, engine_coverage,
                                                    Engine_coverage_integration_source, Engine_coverage_integration_all,
                                                    Probability,
                                                    Remark) -> list:

        lis = []

        for testcase in all_mutation_testcases_pass:
            Testcases_content = testcase
            item = [Testcases_content, SourceFun_id, SourceTestcase_id, Fuzzing_times, Mutation_method,
                    Mutation_times, Interesting_times, engine_coverage,
                    Engine_coverage_integration_source, Engine_coverage_integration_all, Probability, Remark]
            lis.append(item)
        return lis

    def get_function_content(self):
        table_function = Table_Function()
        function = table_function.selectOneFromTableFunction(self.SourceFun_id)
        function_object = Function_Object(function)
        return function_object

    def mutation_method1_2(self, FunctionsSet, FunctionsReplaceBlockSet):
        # regex = r"function(.+\n)+}"
        global parameter
        regex = r"(?<=};\n)(.+\n)+print\(NISLCallingResult\);"
        matches = re.finditer(regex, self.Testcase_context, re.MULTILINE)
        for matchNum, match in enumerate(matches, start=1):
            parameter = match.group()
        # print(self.Testcase_context)
        # print(self.Testcase_context)
        all_functions_generated_testcases = set()
        all_functions_replaced_generated_testcases = set()

        for function in FunctionsSet:
            result = 'var NISLFuzzingFunc = ' + function + parameter
            # print(result)
            all_functions_generated_testcases.add(result)

        for function in FunctionsReplaceBlockSet:
            result = 'var NISLFuzzingFunc = ' + function + parameter

            # print(result)

            # print(self.Testcase_context)
            # print('*'*100)
            # print(function)
            # print('*'*100)
            # print(result)
            # print('*'*100)

            all_functions_replaced_generated_testcases.add(result)

        all_functions_generated_testcases_pass = self.jshint_check_testcases(all_functions_generated_testcases)
        all_functions_replaced_generated_testcases_pass = self.jshint_check_testcases(
            all_functions_replaced_generated_testcases)
        table_testcase = Table_Testcase()

        # all_functions_generated_testcases_pass_list_to_write = self.make_all_mutation_testcases_passListToWrite(
        #     all_functions_generated_testcases_pass,
        #     self.SourceFun_id,
        #     self.Id, 0, 1, 0, 0, None, None, None, 0, None)
        # all_functions_replaced_generated_testcases_pass_list_to_write = self.make_all_mutation_testcases_passListToWrite(
        #     all_functions_replaced_generated_testcases_pass,
        #     self.SourceFun_id,
        #     self.Id, 0, 2, 0, 0, None, None, None, 0, None)

        all_functions_generated_testcases_pass_list_to_write = self.make_all_mutation_testcases_passListToWrite(
            all_functions_generated_testcases,
            self.SourceFun_id,
            self.Id, 0, 1, 0, 0, None, None, None, 0, None)
        all_functions_replaced_generated_testcases_pass_list_to_write = self.make_all_mutation_testcases_passListToWrite(
            all_functions_replaced_generated_testcases,
            self.SourceFun_id,
            self.Id, 0, 2, 0, 0, None, None, None, 0, None)

        table_testcase.insertManyDataToTableTestcase(all_functions_generated_testcases_pass_list_to_write)
        table_testcase.insertManyDataToTableTestcase(all_functions_replaced_generated_testcases_pass_list_to_write)

        return all_functions_generated_testcases_pass, all_functions_replaced_generated_testcases_pass

    def updateFuzzingTimesInterestintTimesCovInfo(self):
        table_Testcases = Table_Testcase()
        table_Testcases.updateFuzzingTimesInterestintTimesCovInfo(self.Fuzzing_times,
                                                                  self.Interesting_times,
                                                                  self.Engine_coverage,
                                                                  self.Engine_coverage_integration_source,
                                                                  self.Id)

    def updateSourceEngine_coverage_integration_all(self):
        table_Testcases = Table_Testcase()
        table_Testcases.updateSourceEngine_coverage_integration_all(self.Engine_coverage_integration_all,
                                                                    self.SourceTestcase_id)

    def getCov(self):
        OwnCov = self.getOwnCov()

        SourceCov = ''
        AllCov = ''

        # print(testcase_object.Engine_coverage_integration_all)
        if (self.SourceTestcase_id != 0):
            SourceCov = self.getSourceCov()

            # all_flag = 0
            #
            # for item in testcase_list:
            #     # print(item[8])
            #     if item[8] is not None and len(item[8]) != 0:
            #         all_flag += 1
            # # print(all_flag,'-',len(testcase_list))
            # if all_flag >= len(testcase_list) - 1:
            #
            #     # print(testcase_list)
            #     otherTestcaseFromSameSourceTestcase = []
            #     otherTestcaseFromSameSourceTestcase.append(self.SourceTestcase_id)
            #     for item in testcase_list:
            #         # print(item[0])
            #         otherTestcaseFromSameSourceTestcase.append(item[0])
            #
            #     AllCov = self.getAllCov(otherTestcaseFromSameSourceTestcase)

            # otherTestcaseFromSameSourceTestcase = []
            # otherTestcaseFromSameSourceTestcase.append(self.SourceTestcase_id)
            # for item in self.testcase_list:
            #     # print(item[0])
            #     otherTestcaseFromSameSourceTestcase.append(item[0])
            AllCov = self.getAllCov(self.testcase_list)

        # print(AllCov)

        return OwnCov, SourceCov, AllCov

    def processCov(self, *profraws):
        # print(profraws)
        profraws_len = len(profraws)
        # COV_PATH = "/root/COMFUZZ/COMFUZZ_js/data/cov_files"
        COV_PATH = hparams.COV_PATH
        # PROFDATA_PATH = f"{COV_PATH}/profdatas/{profraws[0]}_{profraws_len}.prodata"
        PROFDATA_PATH = f"{COV_PATH}/profdatas/{profraws[0]}_{profraws_len}.prodata"
        PROFRAWS_PATH = COV_PATH + "/profraws"
        COV_ENGHINES_PATH = '/root/.jsvu/engines/chakra-1.13-cov/ch'

        profraws_cmd = ''
        for fraws in profraws:
            profraws_cmd += f'{PROFRAWS_PATH}/{fraws}.profraw '

        cmd_coverage = f'llvm-profdata-10 merge -o {PROFDATA_PATH} {profraws_cmd} && llvm-cov-10 export {COV_ENGHINES_PATH} -instr-profile={PROFDATA_PATH} && rm {PROFDATA_PATH}'
        # print(cmd_coverage)
        pro = subprocess.Popen(cmd_coverage, stdin=subprocess.PIPE, stdout=subprocess.PIPE, shell=True,
                               stderr=subprocess.PIPE, universal_newlines=True)
        stdout, stderr = pro.communicate()
        print(stdout)
        print(stderr)
        coverage_stdout_finally = self.del_useless_json_info(stdout)
        return coverage_stdout_finally

    def processAllCov(self, *profraws):
        # print(profraws)
        profraws_len = len(profraws)
        # COV_PATH = "/root/COMFUZZ/COMFUZZ_js/data/cov_files"
        COV_PATH = hparams.COV_PATH
        PROFDATA_PATH = f"{COV_PATH}/profdatas/{profraws[0]}_{profraws_len}.prodata"
        PROFRAWS_PATH = COV_PATH + "/profraws"
        COV_ENGHINES_PATH = '/root/.jsvu/engines/chakra-1.13-cov/ch'

        profraws_cmd = ''
        for fraws in profraws:
            profraws_cmd += f'{PROFRAWS_PATH}/{fraws}.profraw '

        cmd_coverage = f'llvm-profdata-10 merge -o {PROFDATA_PATH} {profraws_cmd} && llvm-cov-10 export {COV_ENGHINES_PATH} -instr-profile={PROFDATA_PATH} && rm {PROFDATA_PATH}'
        # print(cmd_coverage,"cmd_coverage")
        pro = subprocess.Popen(cmd_coverage, stdin=subprocess.PIPE, stdout=subprocess.PIPE, shell=True,
                               stderr=subprocess.PIPE, universal_newlines=True)
        stdout, stderr = pro.communicate()
        coverage_stdout_finally = self.del_useless_json_info(stdout)
        return coverage_stdout_finally

    def removeCov(self, *profraws):
        # COV_PATH = "/root/COMFUZZ/COMFUZZ_js/data/cov_files"
        COV_PATH = hparams.COV_PATH
        PROFRAWS_PATH = COV_PATH + "/profraws"

        profraws_cmd = ''
        for fraws in profraws:
            profraws_cmd += f'{PROFRAWS_PATH}/{fraws}.profraw '

        cmd_coverage = f'rm {profraws_cmd}'

        pro = subprocess.Popen(cmd_coverage, stdin=subprocess.PIPE, stdout=subprocess.PIPE, shell=True,
                               stderr=subprocess.PIPE, universal_newlines=True)
        stdout, stderr = pro.communicate()

    def getOwnCov(self):
        return self.processCov(self.Id)

    def getSourceCov(self):
        return self.processCov(self.Id, self.SourceTestcase_id)

    def getAllCov(self, otherTestcaseFromSameSourceTestcase):
        coverage_stdout_finally = None
        try:
            coverage_stdout_finally = self.processAllCov(*otherTestcaseFromSameSourceTestcase)
            self.removeCov(*otherTestcaseFromSameSourceTestcase)

        except:
            pass

        return coverage_stdout_finally

    def del_useless_json_info(self, json_info):
        res = """"""
        import json
        # print(json_info,"json_info")
        json_dict = json.loads(json_info)

        # -data
        #     -files:print(json_str['data'][0]['files']) （list）
        #         -expansions：没用
        #         -filename：
        #         -segments：没用
        #         -summary：
        #             -function：
        #                 -count
        #                 covered
        #                 percent;
        #             instantiations:
        #                 -count
        #                 covered
        #                 percent;
        #             lines:
        #                 -count
        #                 covered
        #                 percent;
        #             regions:
        #                 -count
        #                 covered
        #                 notcovered
        #                 percent;
        #     functions:print(json_str['data'][0]['functions'])
        #     totals:print(json_str['data'][0]['totals'])
        #             : functions: print(json_str['data'][0]['totals']['functions'])
        #             : instantiations :print(json_str['data'][0]['totals']['instantiations'])
        #             : lines:print(json_str['data'][0]['totals']['lines'])
        #             : regions:print(json_str['data'][0]['totals']['regions'])

        # -type
        # -version

        # print(json_dict)

        for item in ['type', 'version']:
            del json_dict[item]

        # del json_dict['data'][0]['files'][0]['expansions']
        for item in json_dict['data'][0]['files']:
            for del_item in ['expansions', 'segments']:
                del item[del_item]
        del json_dict['data'][0]['functions']
        small_json_info = json.dumps(json_dict)
        return small_json_info
