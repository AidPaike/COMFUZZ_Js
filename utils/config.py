import os
from pathlib import Path

COMFUZZ_JS_Path = Path(__file__).absolute().parent.parent

# sql_config
DATABASE_ADDRESS = 'comfuzz_mysql'
DATABASE_PORT = 3306
DATABASE_NAME = 'JSFuzzing'
DATABASE_USER = 'root'
DATABASE_PASSWORD = 'mysql123'

# gpt config path
MODEL_PATH = os.path.join(COMFUZZ_JS_Path, "data/model/distilgpt2/checkpoint-640000")

# PATH
## javascript testcase dir
JS_DIR = os.path.join(COMFUZZ_JS_Path, 'data/JStestcases/')

## cmd jshint
CMD_JSHINT_DIR = os.path.join(COMFUZZ_JS_Path, 'data/.jshintrc')

##LLVM PROFILE dir
LLVM_PROFILE_DIR = os.path.join(COMFUZZ_JS_Path, "data/cov_files/profraws/")

## model base path
MODEL_BASEPATH = os.path.join(COMFUZZ_JS_Path, "data/train_model/")

## train dataset path
TRAIN_DATASETS = os.path.join(COMFUZZ_JS_Path, "data/datasets/train_data_bos.txt")

## filter info path
FILTER_INFO_PATH = os.path.join(COMFUZZ_JS_Path, "workline/filter_info.yml")

## universal mutation path
UNIVERSAL_MUTATION_PATH = os.path.join(COMFUZZ_JS_Path, "workline/mutator_testcase_tools/universal_mutation.js")

## special mutation path
SPECIAL_MUTATION_PATH = os.path.join(COMFUZZ_JS_Path, "workline/mutator_testcase_tools/special_mutation.js")

## cov files path
COV_PATH = os.path.join(COMFUZZ_JS_Path, "data/cov_files")

## init django
INIT_DJANGO = os.path.join(COMFUZZ_JS_Path, "web/manage.py")