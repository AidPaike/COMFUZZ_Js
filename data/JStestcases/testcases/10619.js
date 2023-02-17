function(parentObj) {
    parentObj.registersHL = (parentObj.registersHL & 0xFF00) | parentObj.registerC;
}