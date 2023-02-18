# 1. Initial seed coverage acquisition
# 2. Variation seed coverage rate acquisition
# 3. Comparison of coverage rates between the two
import json
import statistics

from workline.mysql_tools.Table_Operation import Table_Testcase, Table_Suspicious_Result, Table_Result

table_testcase = Table_Testcase()
table_result = Table_Result()


# list_unMutate = table_testcase.selectInterestingTimeFromTableTestcase(2)

def findCovByTestcaseId(id):
    covJson = table_result.selectTestcaseIdFromTableResult(id)[0][8]
    json_dict = json.loads(covJson)

    json_dict_total = json_dict['data'][0]['totals']


    return json_dict_total


def compareMutateTestcaseCov(id):

    covJson = findCovByTestcaseId(id)
    functions_percent = covJson['functions']['percent']
    lines_percent = covJson['lines']['percent']
    regions_percent = covJson['regions']['percent']

    mutate_list = table_testcase.selectSourceTestcaseIdFromTableTestcase(id)
    print('*' * 20 + f'Use case {id} mutates to generate {len(mutate_list)} use cases' + '*' * 20)

    print(
        'Before the mutation, method coverage is {:.2f}%, line coverage is {:.2f}%, and code block coverage is {:.2f}%'.format(id, functions_percent, lines_percent, regions_percent))

    functions_percent_lis = []
    lines_percent_lis = []
    regions_percent_lis = []

    for item in mutate_list:
        # print(item[0])
        try:
            covJson = findCovByTestcaseId(item[0])
            functions_percent = covJson['functions']['percent']
            lines_percent = covJson['lines']['percent']
            regions_percent = covJson['regions']['percent']

            functions_percent_lis.append(functions_percent)
            lines_percent_lis.append(lines_percent)
            regions_percent_lis.append(regions_percent)

        except:
            pass
            # print(item)
    functions_percent_max = max(functions_percent_lis)
    lines_percent_max = max(lines_percent_lis)
    regions_percent_max = max(regions_percent_lis)

    functions_percent_average = statistics.mean(functions_percent_lis)
    lines_percent_average = statistics.mean(lines_percent_lis)
    regions_percent_average = statistics.mean(regions_percent_lis)
    print(
        'Variation method after coverage up to{:.2f}%,line coverage up to{:.2f}%，the block of code coverage up to{:.2f}%'.format(id, functions_percent_max, lines_percent_max,
                                                                     regions_percent_max))

    print(
        'Variation method coverage after an average of{:.2f}%,the average line coverage for{:.2f}%，the average line coverage for{:.2f}%'.format(id, functions_percent_average,
                                                                     lines_percent_average,
                                                                     regions_percent_average))


# for item in list_unMutate:
#     print(findCovByTestcaseId(item[0]))


if __name__ == '__main__':

    for item in [3,28,31,37,39]:
        compareMutateTestcaseCov(item)
