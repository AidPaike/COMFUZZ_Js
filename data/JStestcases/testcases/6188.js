function(parentObj) {
    var carry_flag = (parentObj.FCarry) ? 0x80 : 0;
    parentObj.FCarry = ((parentObj.registerA & 1) == 1);
    parentObj.registerA = (parentObj.registerA >> 1) | carry_flag;
    parentObj.FZero = parentObj.FSubtract = parentObj.FHalfCarry = false;
}