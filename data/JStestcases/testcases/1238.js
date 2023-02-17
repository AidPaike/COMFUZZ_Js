function(parentObj) {
    parentObj.registerA ^= (parentObj.registersHL >> 8);
    parentObj.FZero = (parentObj.registerA == 0);
    parentObj.FSubtract = parentObj.FHalfCarry = parentObj.FCarry = false;
}