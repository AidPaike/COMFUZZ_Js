import time
from multiprocessing.dummy import Pool as ThreadPool
import sys
from pathlib import Path
from tqdm import tqdm

BASE_DIR = str(Path(__file__).resolve().parent.parent)
sys.path.append(BASE_DIR)
from workline.table_to_class.Table_Function_Class import Function_Object
from workline.mysql_tools.Table_Operation import Table_Function, Table_Testcase, Table_Result, Table_Testbed


class loopProject:
    def __init__(self, interesting_times, fuzzing_times):
        self.table_Testcases = Table_Testcase()
        self.interesting_times = interesting_times
        self.fuzzing_times = fuzzing_times

    def run(self):
        # Obtain the undifferentiated test case, make the difference, and insert the difference result into the database
        list_interesting = self.table_Testcases.selectInterestingTimeFromTableTestcase(self.interesting_times,
                                                                                       self.fuzzing_times)
        if len(list_interesting) > 0:
            print("There are %d interesting test cases" % len(list_interesting))
            return list_interesting, len(list_interesting)
        else:
            return list_interesting, len(list_interesting)


