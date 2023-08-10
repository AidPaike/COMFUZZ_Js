# Download model
import os

from transformers import AutoTokenizer, AutoModelForCausalLM
from utils.worklineConfig import Hparams

hparams = Hparams().parser.parse_args()

# model_name = "gpt2"
# model_name = "gpt2-medium"
model_name = "distilgpt2"

tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(model_name)

tokenizer.save_pretrained(os.path.join(hparams.model_path, model_name))
model.save_pretrained(os.path.join(hparams.model_path, model_name))
