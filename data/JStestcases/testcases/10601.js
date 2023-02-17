function(parentObj) {
    parentObj.registerA &= parentObj.registerB;
    parentObj.FZero = (parentObj.registerA == 0);
    parentObj.FHalfCarry = true;
    parentObj.FSubtract = parentObj.FCarry = false;
}