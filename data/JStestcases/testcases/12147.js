function(parentObj) {
    parentObj.FHalfCarry = true;
    parentObj.FSubtract = false;
    parentObj.FZero = ((parentObj.registersHL & 0x0008) == 0);
}