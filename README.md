# 系统文档


## 1.代码说明
* **step1_save_orginal_to_function_table.py**:构建种子池
* **step2_enrich_function_table.py**: 对种子池进行扩充
* **step3_assemble_function_to_testcases.py**:将种子池中的方法组装成方法。
* **step4_harness.py**:差分测试，将组装好的方法
 * **step5_auto_analysis.py:** 自动分析可疑用例
* **step6_mutate_testcase.py**：变异可疑用例


## 2.系统流程

### 1.将文件存入数据库（已经在3.4导入时完成，无需执行）

将`/root/Comfort_all/data/JStestcases`中的方法存到数据库中。

`python /root/Comfort_all/workline/step1_save_orginal_to_function_table.py`



### 2.扩充种子池（已经在3.4导入时完成，无需执行）

对于2.1中存入数据库的种子进行扩充，扩充后的内容继续存入数据库。

`python /root/Comfort_all/workline/step2_enrich_function_table.py`



### 3. 组装用例

将方法数据库的方法组装成可以运行的测试用例，并存入用例表中。

`python /root/Comfort_all/workline/step3_assemble_function_to_testcases.py`



### 4. 差分测试

从用例表中取出用例进行差分，所有结果存入差分结果表，可疑结果存入可疑结果表

`python /root/Comfort_all/workline/step4_harness.py`



### 5. 自动分析

自动分析可疑结果表中的用例

`python /root/Comfort_all/workline/step5_auto_analysis.py`

### 6.用例变异

从用例表中取出用例进行差分，所有结果存入差分结果表，可疑结果存入可疑结果表

`python /root/Comfort_all/workline/step6_mutate_testcase.py`

#### 6.1生成变异

- 直接续写：使用GPT生成的代码，从截断点之后替换全部代码
- 续写变异：使用GPT生成的代码，替换截断点所在的代码块

#### 6.2通用变异规则

- 随机代码块删除：在主函数体内随机删除变量定义之外的代码块
- While与If代码块互换：将if语句与while进行互相转换
- 条件代码块包裹：在主函数体内随机选取变量定义之外的代码块使用if或while语句进行包裹
- 操作符替换：在函数体内随机选取等元操作符进行替换

#### 6.3专用变异规则

- 语义相近的API替换：将语义相同的API进行互相转换
- 返回值相同的API替换：将定义的变量使用相同返回值的语句进行替换
- 原型链污染：对定义的对象进行`__proto__`属性添加
- 属性篡改：对定义的数组使用`__defineGetter__`与`__defineSetter__`修改属性
- 热点函数优化：对主函数内定义的函数添加循环调用



