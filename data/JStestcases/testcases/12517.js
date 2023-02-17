function(parentObj) {
    parentObj.registerE = ((parentObj.registerE & 0xF) << 4) | (parentObj.registerE >> 4);
    parentObj.FZero = (parentObj.registerE == 0);
    parentObj.FCarry = parentObj.FHalfCarry = parentObj.FSubtract = false;
}