'''
Differential test
'''
import time
# export LC_ALL=C
from multiprocessing.dummy import Pool as ThreadPool
import sys

from pathlib import Path
from tqdm import tqdm

BASE_DIR = str(Path(__file__).resolve().parent.parent)
sys.path.append(BASE_DIR)
from workline.table_to_class.Table_Suspicious_Result_Class import Suspicious_Result_Object
from workline.mysql_tools.Table_Operation import Table_Testcase, Table_Suspicious_Result
from workline.table_to_class.Table_Testcase_Class import Testcase_Object


class harness:
    def __init__(self):
        self.table_Testcases = Table_Testcase()
        # Obtain the undifferentiated test case, make the difference, and insert the difference result into the database
        self.list_unharness = self.table_Testcases.selectFuzzingTimeFromTableTestcase(0)
        self.pbar = tqdm(total=len(self.list_unharness))
        # print("There are %d undifferentiated test cases" % len(self.list_unharness))

    def muti_harness(self, testcase):
        testcase_object = Testcase_Object(testcase)
        self.pbar.update(1)
        start_time = time.time()
        # Get the difference result, each engine output
        harness_result = testcase_object.engine_run_testcase()
        # Whether to store in database
        save2ResultTable = True
        if save2ResultTable:
            # vote
            different_result_list = harness_result.differential_test()
            if len(different_result_list):
                # Save suspicious results after the problem is triggered
                try:
                    # Trigger the problem and store it in the database
                    harness_result.save_to_table_result()
                except:
                    pass
                testcase_object.add_interesting_times(1)
                # Suspicious results are stored in the database
                for interesting_test_result in different_result_list:
                    interesting_test_result.save_to_table_suspicious_Result()
            # else:
            #     testcase_object.subtract_interesting_times(1)
            testcase_object.updateFuzzingTimesInterestintTimesCovInfo()

    def get_list(self):
        return self.list_unharness

    def run(self, list_unharness):
        if len(self.list_unharness) <= 0:
            self.list_unharness = list_unharness
            print("There are %d insteresting test cases" % len(self.list_unharness))
        pool = ThreadPool()
        results = pool.map(self.muti_harness, self.list_unharness)
        pool.close()
        pool.join()
        self.pbar.close()

    def list_11(self):
        list_11 = self.table_Testcases.selectInterestingTimeFromTableTestcase(1, 1)
        return list_11

    def list_01(self):
        list_01 = self.table_Testcases.selectInterestingTimeFromTableTestcase(0, 1)
        return list_01


class analysis:
    def __init__(self):
        self.table_suspicious_Result = Table_Suspicious_Result()
        self.unfiltered_list = self.table_suspicious_Result.selectUnFilteredFromTable_Suspicious_Result()
        # self.unfiltered_list = self.table_suspicious_Result.selectUnFilteredFromTable_Suspicious_Result_with_error_type("'crash'")
        self.pbar = tqdm(total=len(self.unfiltered_list))
        self.start_time = time.time()

    def muti_analysis(self, suspicious_Result):
        suspicious_result = Suspicious_Result_Object(suspicious_Result)
        try:
            suspicious_result.analysis()
        except:
            print('*' * 25 + f'Automatically analyze use cases{suspicious_result.Testcase_id}error' + '*' * 25)
        self.pbar.update(1)

    def run(self):
        self.unfiltered_list = self.table_suspicious_Result.selectUnFilteredFromTable_Suspicious_Result()
        if len(self.unfiltered_list) > 0:
            pool = ThreadPool()
            results = pool.map(self.muti_analysis, self.unfiltered_list)
            pool.close()
            pool.join()
            end_time = time.time()
            self.pbar.close()
            print(f'analysis take {int(end_time - self.start_time)}s')
        else:
            print(len(self.unfiltered_list))
            print("There are no suspicious use cases yet, so skip the analysis phase")


if __name__ == '__main__':
    harness = harness()
    analysis = analysis()
    harness.run(harness.get_list())
    analysis.run()
