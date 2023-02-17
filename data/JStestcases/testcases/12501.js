function(parentObj) {
    parentObj.registerA = parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL);
    parentObj.registersHL = (parentObj.registersHL + 1) & 0xFFFF;
}