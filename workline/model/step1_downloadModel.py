# Download model
import os

from transformers import AutoTokenizer, AutoModelForCausalLM
from utils.config import MODEL_BASEPATH

# model_name = "gpt2"
# model_name = "gpt2-medium"
model_name = "distilgpt2"

tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(model_name)

tokenizer.save_pretrained(os.path.join(MODEL_BASEPATH, model_name))
model.save_pretrained(os.path.join(MODEL_BASEPATH, model_name))
