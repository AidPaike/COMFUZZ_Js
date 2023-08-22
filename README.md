# A Generative and Mutational Approach for Synthesizing Bug-exposing Test Cases to Guide Compiler Fuzzing

COMFUZZ is a compiler fuzzing framework that combining generative and mutation techniques. Unlike prior work, COMFUZZ
devotes to generating the bug-exposing test cases by using historical test programs, and performs the focused testing by
leveraging carefully designed bug-guided mutators.

## COMFUZZ_Js install

- step1 : `git clone https://github.com/AidPaike/COMFUZZ_Js.git`
- step2 : `git lfs pull`

## Docker Image

We provide a [Docker image](https://zenodo.org/record/7602317) to run "out of box". The docker image was tested on a
host machine running Ubuntu 18.04.
The docker image contains the following scripts for running COMFUZZ:

* [step1_generator.py](workline/step1_generator.py): the script that generates test programs according to historical
  test programs.(On a normal server, when limit_num=100, it takes about 2000s)
* [step2_init.py](workline/step2_init.py): the script that builds the initial seed pool. (On a normal server, it takes
  about 1452s to assemble 20000 functions)
* [step3_harness.py](workline/step3_harness.py): the script that performs the differential testing on target compilers.
  js/java ()
* [step4_mutation.py](workline/step4_mutation.py): the script that mutates the interesting test cases for focused and
  intensive testing.

You can use the following step-by-step instructions to run COMFUZZ:

## Setup

There are two ways you can start a change project

### Method 1 ： Load the Docker Image

After downloading the [docker image](https://zenodo.org/record/7602317), using below commands to load the docker image
on the host machine:

```
Commands that how to load docker image.
docker exec -it comfuzz_container bash
```

### Method 2 ： Setup Environmental Parameters

You can get Dockerfile and docker-compose here [COMFUZZ](https://github.com/NWU-NISL-Fuzzing/COMFUZZ)

```
cd COMFUZZ

docker-compose up -d
```

[//]: # (### Method 2 ： Setup Environmental Parameters)

[//]: # (After improting the docker container, using the following command to setup the environmental variable before executing COMFUZZ:)

[//]: # (```)

[//]: # (bash /root/Comfort_all/initialize.sh)

[//]: # (```)

[//]: # (This shell script will also create MySql databases used for differential testing and mutation.)

## Run

To facilitate testing, COMFUZZ provides quick-run command：

```
python3 main.py
```

If you want to see how the overall process works：

```
python3 main.py --enrich_limit_num=10 --loop_times=2 --clean_project
```

For more details, you can use `python3 main.py --help` to see what this parameter means.

---

You can also use the following step-by-step instructions to run COMFUZZ:
### Step0. Decompression:c

```python3 /root/Comfuzz/COMFUZZ_js/workline/step0_preparation.py```

### Step1. Generate test program:

```python3 /root/Comfuzz/COMFUZZ_js/workline/step1_generator.py```

### Step2. Build the seed pool:

```python3 /root/Comfuzz/COMFUZZ_js/workline/step2_init.py```

### Step3. Differential testing:

```python3 /root/Comfuzz/COMFUZZ_js/workline/step3_harness.py```

### Step4. Mutation:

```python3 /root/Comfuzz/COMFUZZ_js/workline/step4_mutation.py```

### Step5. dilter:

```python3 /root/Comfuzz/COMFUZZ_js/workline/step4_mutation.py```

## Main Results

The main results of our work is a [list of bugs](https://github.com/NWU-NISL-Fuzzing/COMFUZZ/blob/main/docs/Bug-List.md)
exposed by COMFUZZ.
