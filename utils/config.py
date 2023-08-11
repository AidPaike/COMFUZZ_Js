import os
from pathlib import Path

COMFUZZ_JS_Path = Path(__file__).absolute().parent.parent

# sql_config
DATABASE_ADDRESS = 'comfuzz_mysql'
DATABASE_PORT = 3306
DATABASE_NAME = 'JSFuzzing'
DATABASE_USER = 'root'
DATABASE_PASSWORD = 'mysql123'
# gpt_config
MODEL_PATH = os.path.join(COMFUZZ_JS_Path, "data/model/distilgpt2/checkpoint-640000")