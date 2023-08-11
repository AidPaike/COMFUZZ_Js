#!/usr/bin/env python
# coding=utf-8
import time, os, sys
from transformers import AutoTokenizer, AutoModelForCausalLM
from transformers import pipeline
from utils.config import MODEL_BASEPATH

os.environ["CUDA_VISIBLE_DEVICES"] = "0"


def generationTextPipe(
        # model_name_or_path="/root/COMFUZZ/comfuzz/data/train_model/distilgpt2_finetune/checkpoint-160000",
        model_name_or_path=os.path.join(MODEL_BASEPATH, "distilgpt2/checkpoint-640000"),
        prefixList=["""function("""],
        num_return_sequences=50,
        max_length=512,
        temperature=1,
        p=0.9,
        k=0,
):
    start = time.time()

    print(f'Loading the model, this will take about 10 seconds, please wait')

    tokenizer = AutoTokenizer.from_pretrained(model_name_or_path)
    model = AutoModelForCausalLM.from_pretrained(model_name_or_path)

    generator = pipeline(task="text-generation", model=model, tokenizer=tokenizer, device=0)
    print("Model loading completed：", time.time() - start)

    allGeneration = generator(prefixList, num_return_sequences=num_return_sequences, max_length=max_length,
                              pad_token_id=tokenizer.eos_token_id, temperature=temperature, k=k, p=p)
    allFunctions = []

    for generationItem in allGeneration:
        for idx, item in enumerate(generationItem):
            allFunctions.append(item['generated_text'])
    return allFunctions


if __name__ == '__main__':
    prefixList = []
    prefix1 = """function("""
    prefix2 = """function(a,"""
    prefixList.append(prefix1)
    prefixList.append(prefix2)
    generationTextPipe(prefixList=prefixList)
