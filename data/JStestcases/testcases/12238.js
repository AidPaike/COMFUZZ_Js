function(parentObj) {
    var dirtySum = parentObj.registerA - parentObj.registerB;
    parentObj.FHalfCarry = ((parentObj.registerA & 0xF) < (dirtySum & 0xF));
    parentObj.FCarry = (dirtySum < 0);
    parentObj.registerA = dirtySum & 0xFF;
    parentObj.FZero = (dirtySum == 0);
    parentObj.FSubtract = true;
}