function(parentObj) {
    if (parentObj.FZero) {
        parentObj.programCounter = (parentObj.programCounter + ((parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter) << 24) >> 24) + 1) & 0xFFFF;
        parentObj.CPUTicks += 4;
    } else {
        parentObj.programCounter = (parentObj.programCounter + 1) & 0xFFFF;
    }
}