function(parentObj) {
    var newFCarry = (parentObj.registerD > 0x7F);
    parentObj.registerD = ((parentObj.registerD << 1) & 0xFF) | ((parentObj.FCarry) ? 1 : 0);
    parentObj.FCarry = newFCarry;
    parentObj.FHalfCarry = parentObj.FSubtract = false;
    parentObj.FZero = (parentObj.registerD == 0);
}