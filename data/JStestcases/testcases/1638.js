function(parentObj) {
    parentObj.FCarry = (parentObj.registerA > 0x7F);
    parentObj.registerA = (parentObj.registerA << 1) & 0xFF;
    parentObj.FHalfCarry = parentObj.FSubtract = false;
    parentObj.FZero = (parentObj.registerA == 0);
}