function(parentObj) {
    if (parentObj.FZero) {
        parentObj.programCounter = (parentObj.memoryRead((parentObj.programCounter + 1) & 0xFFFF) << 8) | parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter);
        parentObj.CPUTicks += 4;
    } else {
        parentObj.programCounter = (parentObj.programCounter + 2) & 0xFFFF;
    }
}