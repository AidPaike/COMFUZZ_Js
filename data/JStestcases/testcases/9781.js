function(parentObj) {
    parentObj.registerC = ((parentObj.registerC & 0xF) << 4) | (parentObj.registerC >> 4);
    parentObj.FZero = (parentObj.registerC == 0);
    parentObj.FCarry = parentObj.FHalfCarry = parentObj.FSubtract = false;
}