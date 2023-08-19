import time
# export LC_ALL=C
from multiprocessing.dummy import Pool as ThreadPool
import sys

from pathlib import Path
from tqdm import tqdm

BASE_DIR = str(Path(__file__).resolve().parent.parent)
sys.path.append(BASE_DIR)
from workline.table_to_class.Table_Suspicious_Result_Class import Suspicious_Result_Object
from workline.mysql_tools.Table_Operation import Table_Suspicious_Result


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
    analysis = analysis()
    analysis.run()
