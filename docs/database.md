# Database description

1. **Table_Function**:Method table
2. **Table_Testcase**:Use-case table
3. **Table_Testbed**:Differential engine table
4. **Table_Result**:Differential result table
5. **Table_Suspicious_Result**:Suspect result table



**1.Table_Function**

**Method table**

| Serial number |        name        |     Statement     |    Types    |
| :--: | :----------------: | :----------: | :--------: |
|  1   |        `id`        |    Table primary key    | bigint(20) |
|  2   | `Function_content` |   Method Contents   |  longtext  |
|  3   |   `SourceFun_id`   |  Parent method contents  |  int(20)   |
|  4   | `Mutation_method`  | Mutation method number |  Int(20)   |
|  5   |  `Mutation_times`  |   Number of mutation   |  Int(20)   |
|  6   |      `Remark`      |     Remarks     |  longtext  |



**2.Table_Testcase**

**Use case table**

| Serial number |        name        |                      Statement                       |    Types    |
| :--: | :-----------------: |:----------------------------------------------------:| :--------: |
|  1   |        `id`         |                  Table primary key                   | bigint(20) |
|  2   | `Testcase_context`  |                   Use Case Content                   |  longtext  |
|  3   |   `SourceFun_id`    |                 Parent method number                 |  int(20)   |
|  4   | `SourceTestcase_id` |                  Parent case number                  |  Int(20)   |
|  5   |   `Fuzzing_times`   |                   Number of tests                    |  Int(20)   |
|  6   |  `Mutation_method`  |         Which mutation method to mutate from         |  Int(20)   |
|  7   |  `Mutation_times`   |                 Number of mutations                  |  Int(20)   |
|  8   | `Interesting_times` | The number of times suspicious behavior is triggered |  Int(20)   |
|  9   | `Engine_coverage`   |                   Engine coverage                    |  decimal(5,3)  |
|  10  | `Engine_coverage_integration_source`   |          Engine coverage integration source          | decimal(5,3)  |
|  11   | `Engine_coverage_integration_all`   |           Engine coverage integration all            | decimal(5,3)  |
|  12   |    `Probability`    |            Probability of being selected             |  Int(20)   |
|  13  |      `Remark`       |                       Remarks                        |  longtext  |



**3.Table_Testbed**

**Engine table**

| Serial number |        name        |     Statement     |    Types    |
| :--: | :----------------: | :----------: | :--------: |
|  1   |        `id`        |    Table primary key    | bigint(20) |
|  2   |   `Testbed_name`   |   Testbed_name  |  longtext  |
|  3   | `Testbed_version`  |   Testbed_version   |  longtext  |
|  4   | `Testbed_location` | Testbed_location |  longtext  |
|  5   |      `Remark`      |     Remark     |  longtext  |



**4.Table_Result**

**Difference result table**

| Serial number |        name        |     Statement     |    Types    |
|:-------------:| :---------------: | :--------: | :----------: |
|       1       |       `id`        |   Table primary key   |  bigint(20)  |
|       2       |   `Testcase_id`   |   Use Case id   |   int(10)    |
|       3       |   `Testbed_id`    | Differential engine id |   int(11)    |
|       4       |   `Returncode`    | Engine return value |   int(11)    |
|       5       |     `Stdout`      |  Correct output  |   longtext   |
|       6       |     `Stderr`      |  Error messages  |   longtext   |
|       7       |   `Duration_ms`   |  Execution time  |   int(11)    |
|       8       |  `Seed_coverage`  | Seed coverage rate | decimal(5,3) |
|       9       |     `Remark`      |    Remarks    |   longtext   |



**5.Table_Suspicious_Result**

**Suspicious result table**

| Serial number |        name        |     Statement     |    Types    |
| :--: | :-----------: | :----------------: | :--------: |
|  1   |     `id`      |       Table primary key       | bigint(20) |
|  2   | `Error_type`  |      Error types      |  longtext  |
|  3   | `Testcase_id` |       Use Case id       |  int(11)   |
|  4   | `Function_id` |       Method id       |  int(11)   |
|  5   | `Testbed_id`  |     Error engine id     |  int(11)   |
|  5   | `Is_filtered` | Automatically analyze the number of errors |  longtext  |
|  7   |   `Remark`    |        Remarks        |  longtext  |
