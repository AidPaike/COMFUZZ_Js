function(parentObj) {
    var temp_var = (parentObj.memoryRead((parentObj.programCounter + 1) & 0xFFFF) << 8) | parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter);
    parentObj.programCounter = (parentObj.programCounter + 2) & 0xFFFF;
    parentObj.memoryWrite(temp_var, parentObj.stackPointer & 0xFF);
    parentObj.memoryWrite((temp_var + 1) & 0xFFFF, parentObj.stackPointer >> 8);
}