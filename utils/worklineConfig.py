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


if __name__ == '__main__':
    hparams = Hparams().parser.parse_args()
