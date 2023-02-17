function(parentObj) {
    if (parentObj.FCarry) {
        parentObj.FZero = false;
        parentObj.FSubtract = parentObj.FHalfCarry = parentObj.FCarry = true;
        parentObj.registerA = 0xFF;
    } else {
        parentObj.FHalfCarry = parentObj.FCarry = false;
        parentObj.FSubtract = parentObj.FZero = true;
        parentObj.registerA = 0;
    }
}