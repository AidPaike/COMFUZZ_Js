# Read the method from Table_Function, assemble the use case, and write Table_Testcase
import time
from multiprocessing.dummy import Pool as ThreadPool
import sys, os
from pathlib import Path
from tqdm import tqdm

BASE_DIR = str(Path(__file__).resolve().parent.parent)
sys.path.append(BASE_DIR)
from workline.table_to_class.Table_Function_Class import Function_Object
from workline.mysql_tools.Table_Operation import Table_Function, Table_Testcase, Table_Result, Table_Testbed, \
    Table_Suspicious_Result


class initproject:
    def __init__(self):
        self.start_time = time.time()
        self.table_Function = Table_Function()
        self.Table_Testbed = Table_Testbed()
        # Gets all the methods in the function table
        self.lis = self.table_Function.selectAllFromTableFunction()
        self.pbar = tqdm(total=len(self.lis))

    def muti_assemble(self, func):
        function_object = Function_Object(func)
        function_object.assemble_to_testcase(5)
        self.pbar.update(1)

    def run(self):
        pool = ThreadPool()
        results = pool.map(self.muti_assemble, self.lis)
        pool.close()
        pool.join()
        self.pbar.close()
        end_time = time.time()
        print(f'init combine take {int(end_time - self.start_time)}s')
        try:
            self.Table_Testbed.initTestbed()
            print('#' * 20 + 'init testbed success' + '#' * 20)
        except Exception as e:
            print('init testbed fail:' + str(e))


class removeDB:
    """Reformatting the database can be used when data needs to be reconstructed"""

    def __init__(self):
        self.start_time = time.time()
        self.table_Function = Table_Function()
        self.table_Testcases = Table_Testcase()
        self.Table_Result = Table_Result()
        self.table_suspicious_Result = Table_Suspicious_Result()

    def run(self):
        self.table_Function.deleteAllFromTableFunction()
        self.table_Testcases.deleteAllFromTableTestcase()
        self.Table_Result.deleteAllFromTableResult()
        self.Table_Result.deleteAllFromTestbed()
        self.table_suspicious_Result.deleteAllFromsus()


if __name__ == '__main__':
    initproject = initproject()
    initproject.run()
# lis = []
# file_dir = pathlib.Path("/root/data/interesting_testcases/reducedjs")
# file_list = list(file_dir.glob("*.js"))
# flag = 0
# for file_path in file_list:
#     # testcase = file_path.read_text()
#     with open(file_path,'r+') as f:
#         # print(file_path)
#         data = f.read()
#         data_replaced = data.replace("var NISLFuzzingFunc = ","")
#         if "NISLParameter0" in data_replaced:
#             data_replaced = data_replaced.split("var")[0]
#             # print(data_replaced)
#         f.seek(0)
#         f.truncate()
#         f.write(data_replaced)
