# Store the initial use case from the folder into the Table_Function table
# Read method from Table_Function, use gpt mutation, then jshint syntax check, then write Table_Function
import os
import subprocess
import sys
import tempfile
import time
from multiprocessing.pool import ThreadPool
from pathlib import Path

BASE_DIR = str(Path(__file__).resolve().parent.parent)
sys.path.append(BASE_DIR)

from utils.config import MODEL_PATH
from utils.config import JS_DIR, CMD_JSHINT_DIR
from workline.table_to_class.Table_Function_Class import Function_Object, write_to_Table_function, \
    makeFunctionListToWrite
from workline.mysql_tools.Table_Operation import Table_Function

from transformers import AutoTokenizer, AutoModelForCausalLM
from transformers import pipeline


# Table_Function format
# Function_content,SourceFun_id,Mutation_method,Remark


class sourceToTable:
    def __init__(self):
        self.js_dir = JS_DIR
        # self.js_dir = r"/root/COMFUZZ/COMFUZZ_js/data/JStestcases/"
        self.lis = []

    def readFileAll(self, path):
        with open(path, 'r', encoding='utf-8') as f:
            code = f.read()
        return code

    def run(self, js_dir):
        for root, dirs, files in os.walk(js_dir):
            for file in files:
                file_path = os.path.join(root, file)
                Function_content = self.readFileAll(file_path)
                SourceFun_id = 0
                Mutation_method = 0
                Mutation_times = 0
                Remark = None
                self.lis.append((Function_content, SourceFun_id, Mutation_method, Mutation_times, Remark))
        print(f'A total of {len(self.lis)} bars are obtained and ready to be added to the database')
        table_Function = Table_Function()
        count = table_Function.insertManyDataToTableFunction(lis=self.lis)
        print(f'Added {count} bar data from {js_dir} to Table_Function')


class enrich_function:
    def __init__(self):
        self.FunctionsJshintPassSet = set()
        self.FunctionsReplaceBlockSetJshintPassSet = set()

    def testJshintPassRate(self, function):
        def cmd_jshint(temp_file_path):
            """
             Use jshint to check  for the generated function
            :param temp_file_path: temporary file location
            :return: Returns true with correct syntax and false with incorrect syntax
            """
            # cmd = ['timeout', '60s', 'jshint', temp_file_path]
            cmd = ['timeout', '10s', 'jshint', '-c', CMD_JSHINT_DIR, temp_file_path]

            if sys.platform.startswith('win'):  # If it's windows
                p = subprocess.Popen(cmd, stdout=subprocess.PIPE, shell=True)
            else:  # If it's linux
                p = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
            stdout, stderr = p.communicate()
            # if stdout:
            #     print(stdout)
            # if stderr:
            #     print("error")
            #     print(stderr)

            if stdout.__len__() > 0:
                jshint_flag = False
            else:  # After passing the check, test_file_name is the prettified code
                jshint_flag = True
                # print(f"{temp_file_path}right!")
            return jshint_flag

        with tempfile.NamedTemporaryFile(delete=True) as tmpfile:
            temp_file_path = tmpfile.name
            # print(temp_file_name)  # /tmp/tmp73zl8gmn
            fine_code = 'var NISLFuzzingFunc = ' + function
            # fine_code = function

            tmpfile.write(fine_code.encode())
            tmpfile.seek(0)
            # tmpTxt = tmpfile.read().decode()
            # print(tmpTxt)
            result = cmd_jshint(temp_file_path)
            return result

    def functionJshintPassMutil(self, function):
        """
        Syntax filters the methods in the past list
        @param functions_set: set to check
        @return: set with correct syntax: functions_pass_set
        """
        if self.testJshintPassRate(function):
            # print(self.FunctionsJshintPassSet)
            self.FunctionsJshintPassSet.add(function)

    def functionReplaceBlockJshintPassMutil(self, function):
        """
        Syntax filters the methods in the past list
        @param functions_set: set to check
        @return: set with correct syntax: functions_pass_set
        """
        # global FunctionsReplaceBlockSetJshintPassSet

        if self.testJshintPassRate(function):
            self.FunctionsReplaceBlockSetJshintPassSet.add(function)

    def enrich_one_function(self, function_item, generator, tokenizer, num_return_sequences=1):
        allGeneration = generator(function_item.prefix_list, num_return_sequences=num_return_sequences, max_length=512,
                                  pad_token_id=tokenizer.eos_token_id, temperature=1, k=0, p=0.9)
        functions_set = set()
        functions_replace_block_set = set()

        for generationIdx, generationItem in enumerate(allGeneration):
            for idx, item in enumerate(generationItem):
                # print('-' * 30 + 'NO.' + str(idx + 1) + '-' * 30)
                # print(item['generated_text'])
                function_replace_block = function_item.gpt_replace_block(
                    len(function_item.prefix_list[generationIdx].splitlines()), item['generated_text'])
                # print(function_replace_block)
                functions_set.add(item['generated_text'])
                # Save to the database if function_replace_block is not None
                if function_replace_block:
                    functions_replace_block_set.add(function_replace_block)
        return functions_set, functions_replace_block_set

    def run(self, limit_num):
        table_Function = Table_Function()
        os.environ["CUDA_VISIBLE_DEVICES"] = "0"
        # Select the parent use case that has not mutated for extension
        lis = table_Function.selectMutationTimesFromTableFunction(0, 0, limit_num)
        # lis = table_Function.selectIdFromTableFunction(1)

        Function_Object_List = []
        # Keep a list of all the use cases that need to be extended
        for item in lis:
            function_object = Function_Object(item)
            Function_Object_List.append(function_object)

        print(f"There is data that needs to be expanded:{len(Function_Object_List)}num.")
        if Function_Object_List:
            start = time.time()
            print(f'Loading the model, this will take about 5 seconds, please wait')
            tokenizer = AutoTokenizer.from_pretrained(MODEL_PATH)
            model = AutoModelForCausalLM.from_pretrained(MODEL_PATH)
            generator = pipeline(task="text-generation", model=model, tokenizer=tokenizer, device=0, warnings=False)
            print("It takes time to complete model loading：", int(time.time() - start), 's')
            num_return_sequences = 50
            for item in Function_Object_List:
                self.FunctionsJshintPassSet = set()
                self.FunctionsReplaceBlockSetJshintPassSet = set()

                print('*' * 30 + f'Function{item.Id} is being extended' + '*' * 30)
                start_gen = time.time()
                # Passing in a use case returns the use case for direct continuations and continuations
                FunctionsSet, FunctionsReplaceBlockSet = self.enrich_one_function(item, generator, tokenizer,
                                                                                  num_return_sequences)
                AllFunctionsSet = FunctionsSet.union(FunctionsReplaceBlockSet)
                if len(item.prefix_list) != 0:
                    print(
                        "The number of non-repeat use cases generated is {}, the non-repeat rate is {:.2%}, "
                        "and the generation speed is {} item/s".format(
                            len(AllFunctionsSet),
                            len(AllFunctionsSet) / (
                                    len(item.prefix_list) * num_return_sequences) / 2,
                            int(len(
                                item.prefix_list) * num_return_sequences / (
                                        time.time() - start_gen))))

                    start_jshint = time.time()

                    pool = ThreadPool()
                    pool.map(self.functionJshintPassMutil, FunctionsSet)
                    pool.map(self.functionReplaceBlockJshintPassMutil, FunctionsReplaceBlockSet)
                    pool.close()
                    pool.join()
                    if len(FunctionsReplaceBlockSet) != 0 and len(FunctionsSet) != 0:
                        print(
                            "The pass rate of direct continuative syntax is {:.2%}, and the pass rate of continuative "
                            "replacement syntax is {:.2%}, and the check speed is {} PCS/SEC".format(
                                len(self.FunctionsJshintPassSet) / len(FunctionsSet),
                                len(self.FunctionsReplaceBlockSetJshintPassSet) / len(
                                    FunctionsReplaceBlockSet),
                                int(len(AllFunctionsSet) / (
                                        time.time() - start_gen))))
                        print('When the extension method is used:', int(time.time() - start_gen), 's')

                        function_list_to_write1 = makeFunctionListToWrite(all_functions=self.FunctionsJshintPassSet,
                                                                          SourceFun_id=item.Id,
                                                                          mutation_type=1,
                                                                          mutation_times=0,
                                                                          Remark=None)

                        function_list_to_write2 = makeFunctionListToWrite(
                            all_functions=self.FunctionsReplaceBlockSetJshintPassSet,
                            SourceFun_id=item.Id,
                            mutation_type=2,
                            mutation_times=0,
                            Remark=None)

                        write_to_Table_function(function_list_to_write1, function_list_to_write2)
                else:
                    print('The prefix list is empty and cannot be expanded')
                # table_Function.updateMutationTimes(item.Mutation_Times + 1, item.Id)


if __name__ == '__main__':
    sourcetotable = sourceToTable()
    enrichfunction = enrich_function()
    start = time.time()
    sourcetotable.run(js_dir=sourcetotable.js_dir)
    print('source To Table is used:', int(time.time() - start), 's')
    enrichfunction.run(limit_num=100)
    print('enrich function is used:', int(time.time() - start), 's')
