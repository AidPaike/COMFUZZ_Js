from workline.mysql_tools.Table_Operation import Table_Testcase


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
    loopproject = loopProject()
