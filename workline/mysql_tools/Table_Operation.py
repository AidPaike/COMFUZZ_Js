from workline.mysql_tools.db_operation_base import DataBaseHandle


class Table_Function(object):
    def __init__(self):
        # 实例化 DataBaseHandle()
        self.__table = DataBaseHandle()

    def selectOneFromTableFunction(self, id):
        sql = 'select * from Table_Function where id=%s'
        prames = (id)
        return self.__table.selectOne(sql, prames)

    def selectIdFromTableFunction(self, id):
        sql = f'select * from Table_Function where id={id}'
        return self.__table.selectall(sql)

    def selectSourceIdFromTableFunction(self, SourceFun_id):
        sql = f'select * from Table_Function where SourceFun_id={SourceFun_id}'
        return self.__table.selectall(sql)

        # return self.__table.selectOne(sql, prames)

    def selectFromTableFunctionForNumber(self, id, number):
        sql = 'select * from Table_Function where id=%s limit %s'
        prames = (id, number)
        return self.__table.selectmany(sql, prames)

    def selectAllFromTableFunction(self):
        sql = 'select * from Table_Function'
        return self.__table.selectall(sql)

    # 插入单行数据
    def insertDataToTableFunction(self, Function_Content, SourceFun_Id, Mutation_Method, Remark):
        # INSERT INTO Table_Function(Function_content,SourceFun_id,Mutation_method,Remark) values ("var NISLFuzzingFunc = function(a, b) {'var NISLFuzzingFunc = function() {\n}",0,0,0);
        sql = 'INSERT INTO Table_Function(Function_content,SourceFun_id,Mutation_method,Remark) values(%s,%s,%s,%s)'
        prames = (Function_Content, SourceFun_Id, Mutation_Method, Remark)
        return self.__table.insert(sql, prames)

    def insertManyDataToTableFunction(self, lis):
        sql = 'insert into Table_Function(Function_content,SourceFun_id,Mutation_method,Mutation_times,Remark) values(%s,%s,%s,%s,%s)'
        return self.__table.insertMany(sql, lis)

    def deleteFromTableFunction(self, id):
        sql = 'delete from Table_Function where id=%s'
        prames = (id,)
        return self.__table.delete(sql, prames)

    def deleteAllFromTableFunction(self):
        sql = 'truncate  Table_Function'
        return self.__table.deleteAll(sql)

    def updateDataBaseHandle(self, id, Function_content):
        sql = 'update Table_Function set Function_content= %s where id = %s'
        prames = (Function_content, id)
        return self.__table.update(sql, prames)

    def updateMutationTimes(self, MutationTimes, id):
        sql = 'update Table_Function set Mutation_times= %s where id = %s'
        prames = (MutationTimes, id)
        return self.__table.update(sql, prames)

    def selectMutationTimesFromTableFunction(self, Mutation_Times, SourceFun_id, limit_num):
        sql = f'select * from Table_Function where Mutation_times={Mutation_Times} AND SourceFun_id = {SourceFun_id} limit {limit_num} '
        return self.__table.selectall(sql)


class Table_Testcase(object):
    def __init__(self):
        self.__table = DataBaseHandle()

    def selectOneFromTableTestcase(self, id):
        sql = 'select * from Table_Testcase where id=%s'
        prames = (id)
        return self.__table.selectOne(sql, prames)

    def selectIdFromTableTestcase(self, id):
        sql = f'select * from Table_Testcase where Id={id}'
        return self.__table.selectall(sql)

    def selectAllFromTableTestcase(self):
        sql = f'select * from Table_Testcase'
        return self.__table.selectall(sql)

    def selectInterestingTimeFromTableTestcase(self, Interesting_times, Fuzzing_times):
        sql = f'select * from Table_Testcase where Interesting_times={Interesting_times} and Fuzzing_times={Fuzzing_times}'
        return self.__table.selectall(sql)

    def selectFuzzingTimeFromTableTestcase(self, Fuzzing_times):
        sql = f'select * from Table_Testcase where Fuzzing_times={Fuzzing_times}'
        return self.__table.selectall(sql)

    def selectFuzzingTimeDistributedFromTableTestcase(self, Fuzzing_times, DistributedStart, DistributedEnd):
        sql = f'select * from Table_Testcase where Fuzzing_times={Fuzzing_times} and id BETWEEN {DistributedStart} AND {DistributedEnd}'
        return self.__table.selectall(sql)

    def selectMutationMethodFromTableTestcase(self, Mutation_method):
        sql = f'select * from Table_Testcase where Mutation_method!={Mutation_method}'
        return self.__table.selectall(sql)

    # 选择没有被变异过得最初的种子池
    def selectMutationTimeAndMutation_methodFromTableTestcase(self, Mutation_method, MutationTime):
        sql = f'select * from Table_Testcase where Mutation_method ={Mutation_method} and Mutation_times ={MutationTime}'
        return self.__table.selectall(sql)

    def selectSourceTestcaseIdFromTableTestcase(self, SourceTestcase_id):
        sql = f'select * from Table_Testcase where SourceTestcase_id={SourceTestcase_id}'
        return self.__table.selectall(sql)

    def selectEngine_coverage_integration_all_is_not_nullFromTableTestcase(self):
        sql = f'select * from Table_Testcase where Engine_coverage_integration_all is not null'
        return self.__table.selectall(sql)

    def selectEngine_coverage_integration_all_is_null_and_MutationTimeIsNOT0FromTableTestcase(self):
        sql = f'select * from Table_Testcase where Engine_coverage_integration_all is null and Mutation_method = 0 and Mutation_times !=0'
        return self.__table.selectall(sql)

    def selectEngine_coverage_integration_all_is_null_and_MutationTimeIsNOT0RangeFromTableTestcase(self, start, end):
        sql = f'select * from Table_Testcase where Engine_coverage_integration_all is null and Mutation_method = 0 and Mutation_times !=0 and id between {start} and {end}'
        return self.__table.selectall(sql)

    def selectSourceTestcaseIdNoFuzzingFromTableTestcase(self, SourceTestcase_id):
        sql = f'select * from Table_Testcase where SourceTestcase_id={SourceTestcase_id} and Fuzzing_times = 0'
        return self.__table.selectall(sql)

    def insertDataToTableTestcase(self, Testcase_context, SourceFun_id, SourceTestcase_id, Fuzzing_times,
                                  Mutation_method, Mutation_times, Interesting_times, engine_coverage,
                                  Engine_coverage_integration_source, Engine_coverage_integration_all, Probability,
                                  Remark):
        sql = 'INSERT INTO Table_Testcase(Testcase_context, SourceFun_id, SourceTestcase_id, Fuzzing_times,Mutation_method ,Mutation_times,Interesting_times,engine_coverage,Engine_coverage_integration_source,Engine_coverage_integration_all,Probability,Remark) values(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)'
        prames = (Testcase_context, SourceFun_id, SourceTestcase_id, Fuzzing_times, Mutation_method, Mutation_times,
                  Interesting_times, engine_coverage, Engine_coverage_integration_source,
                  Engine_coverage_integration_all, Probability, Remark)
        return self.__table.insert(sql, prames)

    def insertManyDataToTableTestcase(self, lis):
        sql = 'INSERT INTO Table_Testcase(Testcase_context, SourceFun_id, SourceTestcase_id, Fuzzing_times,Mutation_method ,Mutation_times,Interesting_times,engine_coverage,Engine_coverage_integration_source,Engine_coverage_integration_all,Probability,Remark) values(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)'

        return self.__table.insertMany(sql, lis)

    def deleteFromTableTestcase(self, id):
        sql = 'delete from Table_Testcase where id=%s'
        prames = (id,)
        return self.__table.delete(sql, prames)

    def deleteAllFromTableTestcase(self):
        sql = 'truncate  Table_Testcase'
        return self.__table.deleteAll(sql)

    def updateDataBaseHandle(self, id, Function_content):
        sql = 'update Table_Testcase set Testcase_context= %s where id = %s'
        prames = (Function_content, id)
        return self.__table.update(sql, prames)

    def updateFuzzingTimesInterestintTimesCovInfo(self, Fuzzing_times, Interesting_times, engine_coverage,
                                                  Engine_coverage_integration_source,
                                                  id):
        sql = 'update Table_Testcase set Fuzzing_times= %s ,Interesting_times = %s, engine_coverage= %s, Engine_coverage_integration_source = %s where id = %s'
        prames = (Fuzzing_times, Interesting_times, engine_coverage,
                  Engine_coverage_integration_source, id)
        return self.__table.update(sql, prames)

    def updateMutationTimes(self, MutationTimes, id):
        sql = 'update Table_Testcase set Mutation_times= %s where id = %s'
        prames = (MutationTimes, id)
        return self.__table.update(sql, prames)
    def updateFuzzingTimes(self, Fuzzing_times, id):
        sql = 'update Table_Testcase set Fuzzing_times= %s where id = %s'
        prames = (Fuzzing_times, id)
        return self.__table.update(sql, prames)
    def updateSourceEngine_coverage_integration_all(self, Engine_coverage_integration_all, id):
        sql = 'update Table_Testcase set Engine_coverage_integration_all= %s where id = %s'
        prames = (Engine_coverage_integration_all, id)
        return self.__table.update(sql, prames)


class Table_Result(object):

    def __init__(self):
        self.__table = DataBaseHandle()

    def selectTestcasesFromTableResult(self, Testcase_id):
        sql = f'select * from Table_Result where Testcase_id={Testcase_id}'
        return self.__table.selectall(sql)

    def selectAllFromTableResult(self):
        sql = 'select * from Table_Result'
        return self.__table.selectall(sql)

    def insertDataToTableResult(self, Testcase_Id, Testbed_Id, Returncode, Stdout, Stderr, duration_ms, seed_coverage,
                                Remark):
        sql = 'INSERT INTO Table_Result(Testcase_Id, Testbed_Id, Returncode, Stdout,Stderr ,duration_ms,seed_coverage,Remark) values(%s,%s,%s,%s,%s,%s,%s,%s)'
        prames = (
            Testcase_Id, Testbed_Id, Returncode, Stdout, Stderr, duration_ms, seed_coverage, Remark)
        return self.__table.insert(sql, prames)

    def selectTestcaseIdFromTableResult(self, testcase_id):
        sql = f'select * from Table_Result where Testcase_id={testcase_id}'
        return self.__table.selectall(sql)

    def insertManyDataToTableResult(self, lis):
        sql = 'INSERT INTO Table_Result(Testcase_Id, Testbed_Id, Returncode, Stdout,Stderr ,duration_ms,seed_coverage,Remark) values(%s,%s,%s,%s,%s,%s,%s,%s)'
        return self.__table.insertMany(sql, lis)

    def deleteFromTableResult(self, id):
        sql = 'delete from Table_Result where id=%s'
        prames = (id,)
        return self.__table.delete(sql, prames)

    def deleteByTestcaseIdFromTableResult(self, testcase_id):
        sql = f'delete from Table_Result where testcase_id={testcase_id}'
        return self.__table.delete(sql)

    def deleteAllFromTableResult(self):
        sql = 'truncate  Table_Result'
        return self.__table.deleteAll(sql)

    def deleteAllFromTestbed(self):
        sql = 'truncate  Table_Testbed'
        return self.__table.deleteAll(sql)


class Table_Testbed(object):

    def __init__(self):
        self.__table = DataBaseHandle()

    def selectAllFromTableTestbed(self):
        sql = 'select * from Table_Testbed'
        return self.__table.selectall(sql)

    def selectAllIdAndLocateFromTableTestbed(self):
        sql = 'select Id,Testbed_location from Table_Testbed'
        return self.__table.selectall(sql)

    def initTestbed(self):
        sql = '''
        INSERT INTO `Table_Testbed` (Id, Testbed_name, Testbed_version, Testbed_location, Remark)
        VALUES (1, 'v8', '9.9.1', '/root/.jsvu/v8', null);
        INSERT INTO `Table_Testbed` (Id, Testbed_name, Testbed_version, Testbed_location, Remark)
        VALUES (2, 'spiderMonkey', 'JavaScript-C96.0', '/root/.jsvu/spidermonkey', null);
        INSERT INTO `Table_Testbed` (Id, Testbed_name, Testbed_version, Testbed_location, Remark)
        VALUES (3, 'chakra', 'ch version 1.11.24.0', '/root/.jsvu/ch', null);
        INSERT INTO `Table_Testbed` (Id, Testbed_name, Testbed_version, Testbed_location, Remark)
        VALUES (4, 'jsc', 'v286936', '/root/.jsvu/javascriptcore', null);
        INSERT INTO `Table_Testbed` (Id, Testbed_name, Testbed_version, Testbed_location, Remark)
        VALUES (5, 'quickjs', 'v2021-03-27', '/root/.jsvu/quickjs', null);
        INSERT INTO `Table_Testbed` (Id, Testbed_name, Testbed_version, Testbed_location, Remark)
        VALUES (6, 'jerryscript', 'Version: 3.0.0 (fea10bb7)', '/root/.jsvu/jerry', null);
        INSERT INTO `Table_Testbed` (Id, Testbed_name, Testbed_version, Testbed_location, Remark)
        VALUES (7, 'graaljs', '21.3.0', '/root/.jsvu/graaljs', null);
        INSERT INTO `Table_Testbed` (Id, Testbed_name, Testbed_version, Testbed_location, Remark)
        VALUES (8, 'hermes', '0.10.0', '/root/.jsvu/hermes', null);
        INSERT INTO `Table_Testbed` (Id, Testbed_name, Testbed_version, Testbed_location, Remark)
        VALUES (9, 'chakra', 'ch version 1.13.0.0-beta', '/root/.jsvu/engines/chakra-1.13-cov/ch', null);
        '''
        return self.__table.inserts(sql)


class Table_Suspicious_Result(object):

    def __init__(self):
        self.__table = DataBaseHandle()

    def insertDataToTableSuspiciousResult(self, Error_type, Testcase_id, Function_id, Testbed_id, Remark, Is_filtered):
        sql = 'INSERT INTO Table_Suspicious_Result( Error_type, Testcase_id, Function_id, Testbed_id,  Remark,Is_filtered) values(%s,%s,%s,%s,%s,%s)'
        prames = (Error_type, Testcase_id, Function_id, Testbed_id, Remark, Is_filtered)
        return self.__table.insert(sql, prames)

    def selectErrorTypeFromTableFunction(self, ErrorType):
        sql = f"select * from Table_Suspicious_Result where Error_type={ErrorType} ORDER BY Testcase_id"
        return self.__table.selectall(sql)

    def selectErrorTypeUnfilteredFromTableFunction(self, ErrorType):
        sql = f"select * from Table_Suspicious_Result where Error_type={ErrorType} And Is_filtered='0' ORDER BY Testcase_id"
        return self.__table.selectall(sql)

    def selectIdFromTable_Suspicious_Result(self, id):
        sql = f'select * from Table_Suspicious_Result where Id={id}'
        return self.__table.selectall(sql)

    def selectTestcseIdFromTable_Suspicious_Result(self, Testcase_id):
        sql = f'select * from Table_Suspicious_Result where Testcase_id={Testcase_id}'
        return self.__table.selectall(sql)

    def selectUnFilteredFromTable_Suspicious_Result_with_error_type(self, error_type):
        sql = f"select * from Table_Suspicious_Result where Is_filtered='0' AND error_type = {error_type}"
        # sql = f"# select * from Table_Suspicious_Result where error_type = {error_type}"
        return self.__table.selectall(sql)

    def selectUnFilteredFromTable_Suspicious_Result(self):
        sql = f"select * from Table_Suspicious_Result where Is_filtered='0'"
        # sql = f"select * from Table_Suspicious_Result where Is_filtered='0' LIMIT 0,50"
        return self.__table.selectall(sql)

    def updateIs_filtered(self, id, Is_filtered):
        sql = 'update Table_Suspicious_Result set Is_filtered= %s where id = %s'
        prames = (Is_filtered, id)
        return self.__table.update(sql, prames)

    def deleteByTestcaseIdFromTable_Suspicious_Result(self, id):
        sql = f'delete from Table_Suspicious_Result where id={id}'
        return self.__table.delete(sql)

    def deleteAllFromsus(self):
        sql = 'truncate  Table_Suspicious_Result'
        return self.__table.deleteAll(sql)
