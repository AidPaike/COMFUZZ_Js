function(parentObj) {
    parentObj.stackPointer = (parentObj.stackPointer + 1) & 0xFFFF;
}