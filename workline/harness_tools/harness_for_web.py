from workline.table_to_class.Table_Testcase_Class import Testcase_Object


def harness_testcase(testcase):
    testcase_object = Testcase_Object(testcase)
    # Get the difference result, each engine output
    harness_result = testcase_object.engine_run_testcase(timeout="30")
    different_result_list = harness_result.differential_test()
    return harness_result, different_result_list
