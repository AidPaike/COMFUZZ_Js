import os
import sys
from pathlib import Path

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from step1_generator import sourceToTable, enrich_function
from step2_init import initproject, removeDB
from step3_harness import harness, analysis
from step4_mutation import mutation
from loopProject import loopProject

BASE_DIR = str(Path(__file__).resolve().parent.parent)
sys.path.append(BASE_DIR)
from utils.worklineConfig import Hparams
import time

if __name__ == '__main__':
    hparams = Hparams().parser.parse_args()
    print(hparams)
    # # init databases
    # try:
    #     cmd = f"python3 {hparams.init_django} makemigrations && python3 {hparams.init_django} migrate"
    #     os.system(cmd)
    #     print('init databases success!')
    # except Exception as e:
    #     print('init databases error!')
    # clean project database
    if hparams.clean_project:
        removeDB = removeDB()
        removeDB.run()
        print("*" * 10 + "clean database success!" + "*" * 10)

    # step1 generator
    sourcetotable = sourceToTable()
    enrichfunction = enrich_function()
    generator_start = time.time()
    sourcetotable.run(js_dir=sourcetotable.js_dir)
    print('source To Table is used:', int(time.time() - generator_start), 's')
    enrichfunction.run(limit_num=hparams.enrich_limit_num)
    print('enrich function is used:', int(time.time() - generator_start), 's')
    #
    # step2 assembling test case and init sql
    print("assembling test case and init sql : ")
    initproject = initproject()
    initproject.run()

    # # step3 harness
    harness = harness()

    # mutation
    mutation = mutation()
    analysis = analysis()

    # step4 loop
    loop_times = 0
    interesting_times = 0
    Fuzzing_times = 0
    loopproject = loopProject(1, 0)
    while True:
        print('now interesting_times={},fuzzing_times={},loop_times={}'.format(
            interesting_times,
            Fuzzing_times, loop_times))
        list_interesting, len_list_interesting = loopproject.run()
        if len_list_interesting == 0 or loop_times == hparams.loop_times:
            interesting_times = 0
            Fuzzing_times = 1
            loop_times = 0
        else:
            print("begin harness")
            harness.run(list_unharness=list_interesting)
            analysis.run()
            interesting_times = 1
            Fuzzing_times = 1

        if interesting_times == 1 and Fuzzing_times == 1:
            # print('interesting test, special variant')
            mutation.run('special', interesting_times, Fuzzing_times)
            harness.run(harness.list_11())
            analysis.run()
            loop_times += 1
            interesting_times = 0
            Fuzzing_times = 1
        elif interesting_times == 0 and Fuzzing_times == 1:
            # print('It is no longer interesting or looptimes when it enters the general variant')
            mutation.run('universal', interesting_times, Fuzzing_times)
            harness.run(harness.list_01())
            analysis.run()
            interesting_times = 1
            Fuzzing_times = 1
