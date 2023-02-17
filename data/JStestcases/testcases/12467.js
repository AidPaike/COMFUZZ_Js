function(parentObj) {
    var temp_var = (((parentObj.registerD << 8) | parentObj.registerE) - 1) & 0xFFFF;
    parentObj.registerD = temp_var >> 8;
    parentObj.registerE = temp_var & 0xFF;
}