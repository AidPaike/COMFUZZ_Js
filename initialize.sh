#!/bin/bash

current_dir=$(pwd)  # 获取当前目录
web_manage="web/manage.py"
python_make_migrations_command="python3 ${current_dir}/${web_manage} makemigrations"
python_migrate_command="python3 ${current_dir}/${web_manage} migrate"

$python_make_migrations_command ; $python_migrate_command