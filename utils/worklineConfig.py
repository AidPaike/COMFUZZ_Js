import argparse, os
from pathlib import Path

COMFUZZ_JS_Path = Path(__file__).absolute().parent.parent


class Hparams:
    parser = argparse.ArgumentParser()

    # step1
    parser.add_argument('--enrich_limit_num', default=1000, type=int,
                        help='Limit the number of initial test case extensions to avoid taking too long')
    # step2

    # main
    parser.add_argument('--loop_times', default=10, type=int, help='Limit number of layers')

    # clean all database
    parser.add_argument('--clean_project', action='store_true', default=False, help='clean project database')

    parser.add_argument('--js_dir', default=os.path.join(COMFUZZ_JS_Path, 'data/JStestcases/'),
                        help='javascript testcase dir')

    parser.add_argument('--cmd_jshint_dir', default=os.path.join(COMFUZZ_JS_Path, 'data/.jshintrc'),
                        help='cmd_jshint')

    parser.add_argument('--LLVM_PROFILE_dir', default=os.path.join(COMFUZZ_JS_Path, "data/cov_files/profraws/"),
                        help='LLVM_PROFILE_dir')

    parser.add_argument('--model_path', default=os.path.join(COMFUZZ_JS_Path, "data/train_model/"))

    parser.add_argument('--train_datasets', default=os.path.join(COMFUZZ_JS_Path, "data/datasets/train_data_bos.txt"),
                        help='train dataset')
