function(parentObj) {
    var temp_var = parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL);
    parentObj.FCarry = (temp_var > 0x7F);
    temp_var = (temp_var << 1) & 0xFF;
    parentObj.memoryWriter[parentObj.registersHL](parentObj, parentObj.registersHL, temp_var);
    parentObj.FHalfCarry = parentObj.FSubtract = false;
    parentObj.FZero = (temp_var == 0);
}