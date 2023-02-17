function(parentObj) {
    var temp_var = parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL);
    var newFCarry = ((temp_var & 0x01) == 0x01);
    temp_var = ((parentObj.FCarry) ? 0x80 : 0) | (temp_var >> 1);
    parentObj.FCarry = newFCarry;
    parentObj.memoryWriter[parentObj.registersHL](parentObj, parentObj.registersHL, temp_var);
    parentObj.FHalfCarry = parentObj.FSubtract = false;
    parentObj.FZero = (temp_var == 0);
}