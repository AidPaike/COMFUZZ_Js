# Download and train the model

> Suggestion: This system has been model trained and saved
> to [data/model/distilgpt2/checkpoint-640000](../data/model/distilgpt2/checkpoint-640000) ,
> this [readme](train_model.md)
> are just convenient to reproduce the model fine-tuning process, but the fine-tuning time is too long, so it is
> recommended to use the model directly and run the readme steps in the [README.md](../README.md) directory.

![image-20230812213136155](https://raw.githubusercontent.com/AidPaike/article-images/main/typora/202308122131268.png)
> As shown in the above figure, if a single ordinary graphics card is trained, it will carry out 60h*50epoch, we used
> multiple high-performance graphics cards to train, to avoid unnecessary trouble, and left the trained case model in the
> catalog

1. Go to the [workline/model](../workline/model) folder  
   `cd /root/COMFUZZ/COMFUZZ_Js/workline/model`

2. Ensure that the network is open to run step1, if the network is not open to use the default cache.  
   `cd /root/COMFUZZ/COMFUZZ_Js/workline/model` and `python3 step1_downloadModel.py`

3. step2 direct fine-tuning of the model

```
python3 step2_trainModel.py \
    --model_name_or_path /root/COMFUZZ/COMFUZZ_Js/data/train_model/distilgpt2 \
    --train_file /root/COMFUZZ/COMFUZZ_Js/data/train_data_bos.txt \
    --per_device_train_batch_size 4 \
    --do_train \
    --output_dir /root/COMFUZZ/COMFUZZ_js/data/train_model/distilgpt2_finetune \
    --save_steps 10000 \
    --save_total_limit 50 \
    --num_train_epochs 50 \
    --overwrite_output_dir True
```

4. STEP4 directly evaluates this model for grammatical correctness, repetition rate, speed of generation, and repetition
   rate with the training set.