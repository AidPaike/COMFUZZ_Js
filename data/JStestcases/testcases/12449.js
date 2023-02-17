function(parentObj) {
    parentObj.stackPointer = (parentObj.stackPointer - 1) & 0xFFFF;
    parentObj.memoryWriter[parentObj.stackPointer](parentObj, parentObj.stackPointer, parentObj.programCounter >> 8);
    parentObj.stackPointer = (parentObj.stackPointer - 1) & 0xFFFF;
    parentObj.memoryWriter[parentObj.stackPointer](parentObj, parentObj.stackPointer, parentObj.programCounter & 0xFF);
    parentObj.programCounter = 0x10;
}