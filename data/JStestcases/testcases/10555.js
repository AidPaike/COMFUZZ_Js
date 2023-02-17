function(parentObj, address, data) {
    parentObj.memory[address - 0x2000] = data;
}