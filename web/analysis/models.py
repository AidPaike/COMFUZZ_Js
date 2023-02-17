from django.db import models


# Create your models here.
class Testbed(models.Model):
    Testbed_name = models.TextField('Testbed_name', null=True)
    Testbed_version = models.TextField('Testbed_version', null=True)
    Testbed_location = models.TextField('Testbed_location', null=True)
    Remark = models.TextField('Remark', null=True)

    def __str__(self):
        return self.Testbed_name

    # create_timestamp = models.DateTimeField(auto_now_add=True)
    # last_edit_timestamp = models.DateTimeField(auto_now=True)
    class Meta:
        db_table = "Table_Testbed"
        verbose_name = "engine"
        verbose_name_plural = verbose_name


class Function(models.Model):
    Function_content = models.TextField(null=True)
    SourceFun_id = models.IntegerField(null=True)
    Mutation_method = models.IntegerField(null=True)
    Mutation_times = models.IntegerField(null=True)
    Remark = models.TextField(null=True)

    class Meta:
        db_table = "Table_Function"


class Suspicious_Result(models.Model):
    Error_type = models.TextField(null=True)
    Testcase_id = models.IntegerField(null=True)
    Function_id = models.IntegerField(null=True)
    Testbed_id = models.IntegerField(null=True)
    Is_filtered = models.TextField(null=True)
    Remark = models.TextField(null=True)

    class Meta:
        db_table = "Table_Suspicious_Result"


class Testcase(models.Model):
    Testcase_context = models.TextField(null=True)
    SourceFun_id = models.IntegerField(null=True)
    SourceTestcase_id = models.IntegerField(null=True)
    Fuzzing_times = models.IntegerField(null=True)
    Mutation_method = models.IntegerField(null=True)
    Mutation_times = models.IntegerField(null=True)
    Interesting_times = models.IntegerField(null=True)
    Engine_coverage = models.TextField(null=True)
    Engine_coverage_integration_source = models.TextField(null=True)
    Engine_coverage_integration_all = models.TextField(null=True)
    Probability = models.IntegerField(null=True)
    Remark = models.TextField(null=True)

    class Meta:
        db_table = "Table_Testcase"


class Result(models.Model):
    Testcase_id = models.IntegerField(null=True)
    Testbed_id = models.IntegerField(null=True)
    Returncode = models.IntegerField(null=True)
    Stdout = models.TextField(null=True)
    Stderr = models.TextField(null=True)
    Duration_ms = models.IntegerField(null=True)
    Seed_coverage = models.DecimalField(max_digits=5, decimal_places=3, null=True)
    Remark = models.TextField(null=True)

    class Meta:
        db_table = "Table_Result"
