function(parentObj, address) {
    return (parentObj.modeSTAT > 1) ? 0xFF : parentObj.memory[address];
}