import os
import subprocess
import time, yaml
from pprint import pprint

from workline.mysql_tools.Table_Operation import Table_Testcase, Table_Result, Table_Suspicious_Result
from workline.table_to_class.Table_Result_Class import Result_Object
from utils.config import FILTER_INFO_PATH


# with open('/root/COMFUZZ/COMFUZZ_js/workline/filter_info.yml', 'r', encoding='utf-8') as fr:
with open(FILTER_INFO_PATH, 'r', encoding='utf-8') as fr:
    filter_info = yaml.load(fr, Loader=yaml.SafeLoader)['returncode_type']


class Suspicious_Result_Object(object):
    def __init__(self, Suspicious_Result_Item):
        self.Id = Suspicious_Result_Item[0]
        self.Error_type: str = Suspicious_Result_Item[1]
        self.Testcase_id = Suspicious_Result_Item[2]
        self.Function_id = Suspicious_Result_Item[3]
        self.Testbed_id = Suspicious_Result_Item[4]
        self.Remark = Suspicious_Result_Item[5]
        self.Is_filtered = Suspicious_Result_Item[6]
        self.ResultDict, self.Returncode = self.getResultListAndReturnCode()
        self.Code_content = self.getCodeContent()
        # print(self.Returncode)

    def getCodeContent(self):
        table_Testcase = Table_Testcase()
        testcase = table_Testcase.selectOneFromTableTestcase(self.Testcase_id)
        return testcase[1]

    def getResultListAndReturnCode(self):
        table_Result = Table_Result()
        Result_list = table_Result.selectTestcasesFromTableResult(self.Testcase_id)
        # print(Result_list)
        result_object_dict = {}
        returncode = ''
        for item in Result_list:
            result_object = Result_Object(item)
            returncode += str(result_object.Testbed_Id)
            returncode += f'({result_object.Returncode})'
            result_object_dict[result_object.Testbed_Id] = result_object
        return result_object_dict, returncode

    def extractYaml1(self):
        for returncode_type in filter_info:
            if returncode_type['returncode'] == self.Returncode:
                return returncode_type
        else:
            return None

    def extractYaml2(self, error_info_list):
        # flag = True
        error_type_list = []
        # print(error_info_list)
        for error_info_item in error_info_list:
            flag = True
            # print(error_info_item['remark-id'])
            if f"'engine': {self.Testbed_id}" in str(error_info_item):
                stdoutList = error_info_item['Stdout']
                stderrList = error_info_item['Stderr']
                codeList = error_info_item['Code']

                # print(stdoutList)
                # print(stderrList)
                # print(codeList)

                if stdoutList is not None:
                    flag = self.compareInfo('Stdout', stdoutList)
                if stderrList is not None and flag:
                    flag = self.compareInfo('Stderr', stderrList)
                if codeList is not None and flag:
                    flag = self.compareInfo('Code', codeList)
                if flag:
                    error_type_list.append(error_info_item)
                else:
                    pass
            else:
                pass
        # print(error_type_list)
        return error_type_list

    def analysis(self):
        if self.Error_type == "crash" and (self.Testbed_id == 3 or self.Testbed_id == 6 or self.Testbed_id == 9):
            testcase = self.Code_content
            self.runWithAsan(testcase)

        else:
            Returncode_block = self.extractYaml1()
            if not Returncode_block:
                pass
            else:
                error_info_list = self.extractYaml2(Returncode_block['error_info'])
                if len(error_info_list) == 0:
                    pass
                else:
                    remark_id = ""
                    for error_info_item in error_info_list:
                        remark_id += f"({str(error_info_item['remark-id'])})"
                    table_suspicious_Result = Table_Suspicious_Result()
                    try:
                        table_suspicious_Result.updateIs_filtered(self.Id, remark_id)
                    except:
                        pass

    def judgeInfo(self, stdout: str, info: str):
        if info in stdout:
            return True
        else:
            return False

    def judgeInfoByRegex(self, stdout: str, info: str):
        # coding=utf8
        # the above tag defines encoding for this document and is for Python 2.x compatibility

        import re

        regex = info

        test_str = stdout

        matches = re.finditer(regex, test_str, re.MULTILINE)

        for matchNum, match in enumerate(matches, start=1):
            return True

        return False

    def compareInfo(self, type, stdList):
        for std in stdList:
            # print('engine:', std['engine'])
            # print('info:', std['info'])
            if type == 'Stdout':
                # print('stdout:', self.ResultDict.get(std['engine']).Stdout)
                # print('info:',std['info'])
                if self.judgeInfoByRegex(self.ResultDict.get(std['engine']).Stdout, std['info']):
                    pass
                else:
                    return False

            if type == 'Stderr':
                # print('stderr:', self.ResultDict.get(std['engine']).Stderr)
                # print('info:',std['info'])
                if self.judgeInfoByRegex(self.ResultDict.get(std['engine']).Stderr, std['info']):
                    pass
                else:
                    return False
            if type == 'Code':
                if self.judgeInfoByRegex(self.Code_content, std['content']):
                    pass
                else:
                    return False
        return True

        # if type == 'stdout':

    def runWithAsan(self, testcase):
        timeout = 30
        testbed_id = self.Testbed_id
        temp_testcase = os.path.join(os.getcwd(), str(time.time()).replace(".", "") + ".js")
        with open(temp_testcase, "w") as f:
            f.write(testcase)
        table_suspicious_Result = Table_Suspicious_Result()
        if testbed_id == 3:
            # testbed = "/root/.jsvu/engines/chakra-asan/ChakraCore-1.11.24/out/Release/ch"
            testbed = "/root/.jsvu/engines/chakra-asan/chakra-1.11.24/ch"
            cmd = ["timeout", "-s9", str(timeout), testbed, temp_testcase]
            pro = subprocess.Popen(cmd, stdin=subprocess.PIPE, stdout=subprocess.PIPE,
                                   stderr=subprocess.PIPE, universal_newlines=True)
            stdout, stderr = pro.communicate()
            if (str(stderr).strip().startswith("AddressSanitizer")):
                remark_id = "asan"
                table_suspicious_Result.updateIs_filtered(self.Id, remark_id)
            else:
                remark_id = "1"
                table_suspicious_Result.updateIs_filtered(self.Id, remark_id)

        if testbed_id == 9:
            # testbed = "/root/.jsvu/engines/chakra-asan/ChakraCore/out/Release/ch"
            testbed = "/root/.jsvu/engines/chakra-asan/chakra-1.13-beta/ch"
            cmd = ["timeout", "-s9", str(timeout), testbed, temp_testcase]
            pro = subprocess.Popen(cmd, stdin=subprocess.PIPE, stdout=subprocess.PIPE,
                                   stderr=subprocess.PIPE, universal_newlines=True)
            stdout, stderr = pro.communicate()
            if (str(stderr).strip().startswith("AddressSanitizer")):
                remark_id = "asan"
                table_suspicious_Result.updateIs_filtered(self.Id, remark_id)
            else:
                remark_id = "1"
                table_suspicious_Result.updateIs_filtered(self.Id, remark_id)
        if testbed_id == 6:
            testbed = "/root/.jsvu/engines/jerryscript-asan/jerryscript-fea10bb7/build/bin/jerry"
            cmd = ["timeout", "-s9", str(timeout), testbed, temp_testcase]
            pro = subprocess.Popen(cmd, stdin=subprocess.PIPE, stdout=subprocess.PIPE,
                                   stderr=subprocess.PIPE, universal_newlines=True)
            stdout, stderr = pro.communicate()
            # print("stdout:" + "\n" + stdout)
            # print("stderr:" + "\n" + stderr)
            if ("Error" in str(stderr) and not ("timeout: the monitored command dumped core" in str(stderr))):
                remark_id = "1"
                table_suspicious_Result.updateIs_filtered(self.Id, remark_id)
            else:
                remark_id = "asan"
                table_suspicious_Result.updateIs_filtered(self.Id, remark_id)
        os.remove(temp_testcase)
