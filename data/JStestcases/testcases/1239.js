function(parentObj) {
    var temp_var = parentObj.memoryReader[parentObj.stackPointer](parentObj, parentObj.stackPointer);
    parentObj.FZero = (temp_var > 0x7F);
    parentObj.FSubtract = ((temp_var & 0x40) == 0x40);
    parentObj.FHalfCarry = ((temp_var & 0x20) == 0x20);
    parentObj.FCarry = ((temp_var & 0x10) == 0x10);
    parentObj.registerA = parentObj.memoryRead((parentObj.stackPointer + 1) & 0xFFFF);
    parentObj.stackPointer = (parentObj.stackPointer + 2) & 0xFFFF;
}