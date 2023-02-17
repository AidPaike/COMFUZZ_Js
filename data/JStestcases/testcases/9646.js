function(parentObj) {
    parentObj.FCarry = (parentObj.registerC > 0x7F);
    parentObj.registerC = (parentObj.registerC << 1) & 0xFF;
    parentObj.FHalfCarry = parentObj.FSubtract = false;
    parentObj.FZero = (parentObj.registerC == 0);
}