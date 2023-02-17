function(parentObj, address) {
    return parentObj.ROM[parentObj.currentROMBank + address];
}