function(parentObj) {
    parentObj.FCarry = ((parentObj.registerB & 0x01) == 0x01);
    parentObj.registerB >>= 1;
    parentObj.FHalfCarry = parentObj.FSubtract = false;
    parentObj.FZero = (parentObj.registerB == 0);
}