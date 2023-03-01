```
python3 step2_trainModel.py \
    --model_name_or_path /root/COMFUZZ/COMFUZZ_js/data/train_model/distilgpt2 \
    --train_file /root/COMFUZZ/COMFUZZ_js/data/datasets/train_data_bos.txt \
    --per_device_train_batch_size 4 \
    --do_train \
    --output_dir /root/COMFUZZ/COMFUZZ_js/data/train_model/distilgpt2 \
    --save_steps 10000 \
    --save_total_limit 50 \
    --num_train_epochs 50 \
    --overwrite_output_dir True
```