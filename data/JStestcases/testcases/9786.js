function(parentObj) {
    var newFCarry = (parentObj.registerB > 0x7F);
    parentObj.registerB = ((parentObj.registerB << 1) & 0xFF) | ((parentObj.FCarry) ? 1 : 0);
    parentObj.FCarry = newFCarry;
    parentObj.FHalfCarry = parentObj.FSubtract = false;
    parentObj.FZero = (parentObj.registerB == 0);
}