function(parentObj) {
    var temp_var = ((parentObj.registerD << 8) | parentObj.registerE) + 1;
    parentObj.registerD = (temp_var >> 8) & 0xFF;
    parentObj.registerE = temp_var & 0xFF;
}