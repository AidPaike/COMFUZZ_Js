# 1.jshint syntax pass rate
# 2. Repetition rate of generated data itself
# 3. Repetition rate of generated data and training set
# 4. Average number of rows of generated data
import sys
from pathlib import Path

BASE_DIR = str(Path(__file__).resolve().parent.parent.parent)
sys.path.append(BASE_DIR)
# Test model, randomly 200 method heads, each head generated 50 methods, a total of 10,000 methods.
from multiprocessing.dummy import Pool as ThreadPool
import subprocess
import sys
import time
import tempfile
import os

from workline.model.step3_generationTextPipe import generationTextPipe
from utils.config import MODEL_PATH, TRAIN_DATASETS, CMD_JSHINT_DIR

os.environ["TOKENIZERS_PARALLELISM"] = "false"
from transformers import AutoTokenizer, AutoModelForCausalLM, pipeline


def cmd_jshint(temp_file_path):
    """
    Checking the generated function using jshint \n
    :param temp_file_path: temporary file location
    :return: return true if syntax is correct, false if syntax is wrong
    """
    # cmd = ['timeout', '60s', 'jshint', temp_file_path]
    cmd = ['timeout', '10s', 'jshint', '-c', CMD_JSHINT_DIR, temp_file_path]

    if sys.platform.startswith('win'):  # If it's windows
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
    else:  # passes the check, and now test_file_name contains the beautified code
        jshint_flag = True
        # print(f"{temp_file_path}right!")
    return jshint_flag


def testJshintPassRate(function):
    global testJshintPassRateSet
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
        if result:
            testJshintPassRateSet.add(function)


def repetitionRateGeneratedDataItself(allFunctions):
    noRepeatFunctions = set(allFunctions)
    noRepeatFunctionsSize = len(noRepeatFunctions)
    return noRepeatFunctionsSize


def generateDataWithRepetitionRateTrainingSet(function):
    # trainDataFile = '/root/COMFUZZ/COMFUZZ_js/data/datasets/train_data_bos.txt'
    trainDataFile = TRAIN_DATASETS
    with open(trainDataFile, 'r') as f:
        trainDatasetContents = f.read()
        if function in trainDatasetContents:
            global generateDataWithRepetitionRateTrainingSetCount
            generateDataWithRepetitionRateTrainingSetCount += 1


def averageNumberRowsToGenerateData(function):
    global averageNumberRowsToGenerateDataCount
    averageNumberRowsToGenerateDataCount += len(function.splitlines())


def multithreadedAnalysis(function):
    testJshintPassRate(function)
    generateDataWithRepetitionRateTrainingSet(function)


# model_name = "/root/COMFUZZ/COMFUZZ_js/data/train_model/distilgpt2_new/checkpoint-640000"
# model_name = os.path.join(MODEL_BASEPATH, "distilgpt2/checkpoint-640000")
model_name = MODEL_PATH

num = 50

max_length = 512

temperature = 1

p = 0.9

k = 0

start_gen = time.time()

prefixList = []

prefix1 = """function("""
prefixList.append(prefix1)

allFunctions = generationTextPipe(model_name_or_path=model_name, prefixList=prefixList, num_return_sequences=100)
# for item in allFunctions:
#     print(item)
end_time = time.time()

totalSize = len(allFunctions)

print(f'max length---->{max_length}')

print(
    f'Generate a total of {totalSize} method, generation speed: {int(len(allFunctions) / (end_time - start_gen))}item/s')

generateDataWithRepetitionRateTrainingSetCount = 0

testJshintPassRateSet = set()

averageNumberRowsToGenerateDataCount = 0

pool = ThreadPool()

pool.map(multithreadedAnalysis, allFunctions)

pool.close()

pool.join()

noRepeatFunctionsSize = repetitionRateGeneratedDataItself(allFunctions)

print("The syntactic correctness of the generated use cases is {:.2%},".format(len(testJshintPassRateSet) / totalSize))

print("The duplication rate of the generated data itself is {:.2%}".format(1 - noRepeatFunctionsSize / totalSize))

print("The repetition rate of the generated data with the training set is {:.2%}".format(
    generateDataWithRepetitionRateTrainingSetCount / totalSize))

# Count the number of lines of code that pass syntax checking
for testJshintPassRate in testJshintPassRateSet:
    averageNumberRowsToGenerateData(testJshintPassRate)

print("The average number of lines for grammatically correct methods is {} lines".format(
    int(averageNumberRowsToGenerateDataCount / totalSize)))
