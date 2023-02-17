function(parentObj) {
    parentObj.FCarry = (parentObj.registerA > 0x7F);
    parentObj.registerA = ((parentObj.registerA << 1) & 0xFF) | ((parentObj.FCarry) ? 1 : 0);
    parentObj.FHalfCarry = parentObj.FSubtract = false;
    parentObj.FZero = (parentObj.registerA == 0);
}