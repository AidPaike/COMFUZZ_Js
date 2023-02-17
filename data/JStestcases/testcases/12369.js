function(parentObj) {
    var dirtySum = parentObj.registerA - parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter);
    parentObj.programCounter = (parentObj.programCounter + 1) & 0xFFFF;
    parentObj.FHalfCarry = ((parentObj.registerA & 0xF) < (dirtySum & 0xF));
    parentObj.FCarry = (dirtySum < 0);
    parentObj.registerA = dirtySum & 0xFF;
    parentObj.FZero = (dirtySum == 0);
    parentObj.FSubtract = true;
}