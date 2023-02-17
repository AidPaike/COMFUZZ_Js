function(parentObj) {
    parentObj.registersHL = (parentObj.registerE << 8) | (parentObj.registersHL & 0xFF);
}