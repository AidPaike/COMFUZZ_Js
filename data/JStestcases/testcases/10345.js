function(parentObj) {
    var temp_var = (parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL) + 1) & 0xFF;
    parentObj.FZero = (temp_var == 0);
    parentObj.FHalfCarry = ((temp_var & 0xF) == 0);
    parentObj.FSubtract = false;
    parentObj.memoryWriter[parentObj.registersHL](parentObj, parentObj.registersHL, temp_var);
}