function(parentObj) {
    var temp_value2 = (parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter) << 24) >> 24;
    parentObj.programCounter = (parentObj.programCounter + 1) & 0xFFFF;
    var temp_value = (parentObj.stackPointer + temp_value2) & 0xFFFF;
    temp_value2 = parentObj.stackPointer ^ temp_value2 ^ temp_value;
    parentObj.stackPointer = temp_value;
    parentObj.FCarry = ((temp_value2 & 0x100) == 0x100);
    parentObj.FHalfCarry = ((temp_value2 & 0x10) == 0x10);
    parentObj.FZero = parentObj.FSubtract = false;
}