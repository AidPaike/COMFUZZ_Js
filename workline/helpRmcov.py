# Delete use cases with coverage already saved
import os
import subprocess, sys
from pathlib import Path

BASE_DIR = str(Path(__file__).resolve().parent.parent)
sys.path.append(BASE_DIR)

from workline.mysql_tools.Table_Operation import Table_Testcase
from utils.config import COV_PATH


def removeCov(self, *profraws):
    # COV_PATH = "/root/COMFUZZ/COMFUZZ_js/data/cov_files"
    PROFRAWS_PATH = COV_PATH + "/profraws"

    profraws_cmd = ''
    for fraws in profraws:
        profraws_cmd += f'{PROFRAWS_PATH}/{fraws}.profraw '

    cmd_coverage = f'rm {profraws_cmd}'
    pro = subprocess.Popen(cmd_coverage, stdin=subprocess.PIPE, stdout=subprocess.PIPE, shell=True,
                           stderr=subprocess.PIPE, universal_newlines=True)
    stdout, stderr = pro.communicate()


table_Testcases = Table_Testcase()
list_unharness = table_Testcases.selectEngine_coverage_integration_all_is_not_nullFromTableTestcase()

for item in list_unharness:
    id = item[0]
    print(id)
    testcase_list = table_Testcases.selectSourceTestcaseIdFromTableTestcase(id)

    rmTestcaseFromSameSourceTestcase = []
    for item in testcase_list:
        # print(item[0])
        rmTestcaseFromSameSourceTestcase.append(item[0])

    removeCov(*rmTestcaseFromSameSourceTestcase)
