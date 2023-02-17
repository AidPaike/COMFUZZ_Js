function(parentObj) {
    parentObj.FCarry = ((parentObj.registersHL & 0x0001) == 0x0001);
    parentObj.registersHL = (parentObj.registersHL & 0xFF00) | ((parentObj.registersHL & 0xFF) >> 1);
    parentObj.FHalfCarry = parentObj.FSubtract = false;
    parentObj.FZero = ((parentObj.registersHL & 0xFF) == 0);
}