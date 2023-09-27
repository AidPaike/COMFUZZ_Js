Different systems compile different engines, so the following uses Linux as an example

## ChakraCore(for coverage)

1. Clone the latest version

```
git clone https://github.com/chakra-core/ChakraCore.git
```



2. Insert following content into .jsvu/ChakraCore/CMakeLists.txt

```
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -fprofile-instr-generate -fcoverage-mapping")     

set(CMAKE_C_FLAGS  "${CMAKE_C_FLAGS} -fprofile-instr-generate -fcoverage-mapping")
```



3. Compile

```
cd ChakraCore
./build.sh
```



## Chakra

1. Clone the specific version

```
git clone https://github.com/chakra-core/ChakraCore/archive/refs/tags/v1.11.24.tar.gz
```



## Hermes

1. Clone the specific version

```
git clone https://github.com/facebook/hermes/releases/download/v0.10.0/hermes-cli-linux-v0.10.0.tar.gz
```



## JerryScript

1. Clone the specific version

```
git clone https://github.com/jerryscript-project/jerryscript.git
```



## Setup with jsvu

The setup can also through using `https://github.com/GoogleChromeLabs/jsvu`.


## Google cloud
ch_hermes_jerry packages available in google cloud [https://drive.google.com/file/d/1i0KdKys5fbxS3thC4igEMlIpHAcDzT3J/view?usp=sharing](https://drive.google.com/file/d/1i0KdKys5fbxS3thC4igEMlIpHAcDzT3J/view?usp=sharing), `tar -zxvf ch_hermes_jerry.tar`
chakra-1.13-cov packages available in google cloud [https://drive.google.com/file/d/1fzXb0hctLW9wb3YbFE860V2kMdpfBwnV/view?usp=sharing](https://drive.google.com/file/d/1fzXb0hctLW9wb3YbFE860V2kMdpfBwnV/view?usp=sharing), `tar -zxvf chakra-1.13-cov.tar`
jerryscript-asan packages available in google cloud [https://drive.google.com/file/d/1oe3K1CXFksqswagAtd9WKqXHP2vzZimF/view?usp=sharing](https://drive.google.com/file/d/1oe3K1CXFksqswagAtd9WKqXHP2vzZimF/view?usp=sharing), `cd /root/.jsvu/engines && tar -zxvf jerryscript-asan.tar`
chakra-asan packages available in google cloud [https://drive.google.com/file/d/1cSw0q16ZVAb2cfqVO7zKIYCn_vrydXs9/view?usp=sharing](https://drive.google.com/file/d/1cSw0q16ZVAb2cfqVO7zKIYCn_vrydXs9/view?usp=sharing), `cd /root/.jsvu/engines && tar -zxvf chakra-asan.tar`
