function(parentObj) {
    parentObj.FCarry = (parentObj.registerE > 0x7F);
    parentObj.registerE = ((parentObj.registerE << 1) & 0xFF) | ((parentObj.FCarry) ? 1 : 0);
    parentObj.FHalfCarry = parentObj.FSubtract = false;
    parentObj.FZero = (parentObj.registerE == 0);
}