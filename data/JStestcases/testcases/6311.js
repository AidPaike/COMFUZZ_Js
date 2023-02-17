function(parentObj) {
    if (parentObj.FZero) {
        parentObj.programCounter = (parentObj.memoryRead((parentObj.stackPointer + 1) & 0xFFFF) << 8) | parentObj.memoryReader[parentObj.stackPointer](parentObj, parentObj.stackPointer);
        parentObj.stackPointer = (parentObj.stackPointer + 2) & 0xFFFF;
        parentObj.CPUTicks += 12;
    }
}