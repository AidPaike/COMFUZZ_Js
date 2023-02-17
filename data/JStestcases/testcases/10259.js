function(parentObj) {
    parentObj.FCarry = ((parentObj.registerE & 0x01) == 0x01);
    parentObj.registerE = ((parentObj.FCarry) ? 0x80 : 0) | (parentObj.registerE >> 1);
    parentObj.FHalfCarry = parentObj.FSubtract = false;
    parentObj.FZero = (parentObj.registerE == 0);
}