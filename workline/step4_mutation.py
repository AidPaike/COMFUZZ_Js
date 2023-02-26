import os
import subprocess
import sys
import tempfile
import time
from multiprocessing.pool import ThreadPool
from pathlib import Path

from tqdm import tqdm
from transformers import AutoTokenizer, AutoModelForCausalLM, pipeline

BASE_DIR = str(Path(__file__).resolve().parent.parent)
sys.path.append(BASE_DIR)
from workline.table_to_class.Table_Testcase_Class import Testcase_Object
from workline.mysql_tools.Table_Operation import Table_Testcase
from utils.config import MODEL_PATH

# 添加环境变量
os.environ['NODE_PATH'] = '/usr/lib/node_modules/'

os.environ["CUDA_VISIBLE_DEVICES"] = "0"


class mutation:
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
            cmd = ['timeout', '10s', 'jshint', '-c', '/root/Comfuzz/COMFUZZ_js/data/.jshintrc', temp_file_path]

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

    def enrich_one_function(self, function_item, generator, tokenizer, num_return_sequences=1):
        allGeneration = generator(function_item.prefix_list, num_return_sequences=num_return_sequences, max_length=512,
                                  pad_token_id=tokenizer.eos_token_id, temperature=1, k=0, p=0.9)
        functions_set = set()
        functions_replace_block_set = set()

        for generationIdx, generationItem in enumerate(allGeneration):
            # print('-' * 30 + 'NO.' + str(idx + 1) + '-' * 30)
            # print(item['generated_text'])
            for idx, item in enumerate(generationItem):
                # print('-' * 30 + 'NO.' + str(idx + 1) + '-' * 30)
                # print(item['generated_text'])
                function_replace_block = function_item.gpt_replace_block(
                    len(function_item.prefix_list[generationIdx].splitlines()), item['generated_text'])
                # print(function_replace_block)
                functions_set.add(item['generated_text'])
                if function_replace_block:
                    functions_replace_block_set.add(function_replace_block)

        return functions_set, functions_replace_block_set

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
        if self.testJshintPassRate(function):
            self.FunctionsReplaceBlockSetJshintPassSet.add(function)

    def run(self, model, interesting_times, Fuzzing_times):
        table_testcase = Table_Testcase()
        list_unMutate = table_testcase.selectInterestingTimeFromTableTestcase(interesting_times, Fuzzing_times)
        testcase_object_list = []
        # print('There are {} use cases ready to mutate'.format(len(list_unMutate)))
        for unMutate_item in list_unMutate:
            testcase_object = Testcase_Object(unMutate_item)
            # testcase_object.update_fuzzing_times(99)
            testcase_object_list.append(testcase_object)
        print("There are %d test cases that require variation" % len(testcase_object_list))

        if testcase_object_list:
            useGptMutate = True
            if useGptMutate:
                start = time.time()
                print(f'Loading the model, this will take about 5 seconds, please wait')
                tokenizer = AutoTokenizer.from_pretrained(MODEL_PATH)
                model = AutoModelForCausalLM.from_pretrained(MODEL_PATH)
                generator = pipeline(task="text-generation", model=model, tokenizer=tokenizer, device=0)
                print("Model loading is complete:", time.time() - start)

            for item in testcase_object_list:
                # pbar.update(1)
                print('*' * 25 + f'mutation testcase{item.Id}' + '*' * 25)
                print("Manual rule replacement in progress")
                random_block_remove_pass, while_if_swap_pass, condition_code_add_pass, replaceOperator_pass, replace_similar_API_pass, replace_return_API_pass, proto_pollution_pass, property_modification_pass, hotspot_optimization_pass = item.mutation_method4(
                    model)
                num = len(random_block_remove_pass) + len(while_if_swap_pass) + len(condition_code_add_pass) + len(
                    replaceOperator_pass) + len(replace_similar_API_pass) + len(replace_return_API_pass) + len(
                    proto_pollution_pass) + len(property_modification_pass) + len(hotspot_optimization_pass)
                print(f'The rule mutates {num} use cases')

                if useGptMutate:
                    print("Ongoing GPT mutation")
                    num_return_sequences = 50
                    start_gen = time.time()
                    FunctionsSet = {}
                    FunctionsReplaceBlockSet = {}
                    try:
                        FunctionsSet, FunctionsReplaceBlockSet = self.enrich_one_function(item, generator, tokenizer,
                                                                                          num_return_sequences)

                        AllFunctionsSet = FunctionsSet.union(FunctionsReplaceBlockSet)

                        if (len(item.source_function_object.prefix_list)):
                            print(
                                "The number of non-repeat use cases generated is {}, the non-repeat rate is {:.2%}, and the generation speed is {} PCS/SEC".format(
                                    len(AllFunctionsSet),
                                    len(AllFunctionsSet) / (
                                            len(item.source_function_object.prefix_list) * num_return_sequences) / 2,
                                    int(len(
                                        AllFunctionsSet) / max(
                                        (
                                                time.time() - start_gen),
                                        1))))
                        start_jshint = time.time()

                        FunctionsJshintPassSet = set()
                        FunctionsReplaceBlockSetJshintPassSet = set()

                        start_gen1 = time.time()
                        pool = ThreadPool()
                        pool.map(self.functionJshintPassMutil, FunctionsSet)
                        pool.map(self.functionReplaceBlockJshintPassMutil, FunctionsReplaceBlockSet)
                        pool.close()
                        pool.join()

                        if (len(FunctionsSet) and len(FunctionsReplaceBlockSet)):
                            print(
                                "The pass rate of direct continuative syntax is {:.2%}, and the pass rate of continuative replacement syntax is {:.2%}, and the check speed is {} PCS/SEC".format(
                                    len(FunctionsJshintPassSet) / len(FunctionsSet),
                                    len(FunctionsReplaceBlockSetJshintPassSet) / len(
                                        FunctionsReplaceBlockSet),
                                    int(len(AllFunctionsSet) / max(1, int(time.time() - start_gen1)))))
                        all_functions_generated_testcases_pass, all_functions_replaced_generated_testcases_pass = item.mutation_method1_2(
                            FunctionsJshintPassSet, FunctionsReplaceBlockSetJshintPassSet)

                        print(
                            f'Write {len(all_functions_generated_testcases_pass)} GPT continuos, {len(all_functions_replaced_generated_testcases_pass)} Several GPT continuations are stored in the database')
                    except:
                        pass
                table_testcase.updateMutationTimes(item.Mutation_times + 1, item.Id)
                # print(str(item.Id)+"The mutation is complete. Silent instruction is about to be executed")
                table_testcase.updateFuzzingTimes(99, item.Id)
                # print(str(item.Id)+"The silent command has been executed, please check")

        # pbar.close()


class loopProject:
    def __init__(self):
        self.table_Testcases = Table_Testcase()

    def run(self, interesting_times, fuzzing_times):
        # Obtain the undifferentiated test case, make the difference, and insert the difference result into the database
        list_interesting = self.table_Testcases.selectInterestingTimeFromTableTestcase(interesting_times,
                                                                                       fuzzing_times)
        if len(list_interesting) > 0:
            print("There are %d interesting test cases" % len(list_interesting))
            return list_interesting, len(list_interesting)
        else:
            return list_interesting, len(list_interesting)


if __name__ == '__main__':
    mutation = mutation()
    mutation.run('both', 0, 0)
