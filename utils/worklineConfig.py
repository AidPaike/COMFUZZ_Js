import argparse


class Hparams:
    parser = argparse.ArgumentParser()

    # step1
    parser.add_argument('--enrich_limit_num', default=1000, type=int, help='限定扩充个数，避免扩充时间过长')
    # step2

    # main
    parser.add_argument('--loop_times', default=10, type=int, help='限定层数')

    # clean all database
    parser.add_argument('--clean_project',action='store_true',default=False,help='clean project database')
