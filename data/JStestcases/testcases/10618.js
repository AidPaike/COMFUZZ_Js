function(parentObj) {
    parentObj.registerC = parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter);
    parentObj.registerB = parentObj.memoryRead((parentObj.programCounter + 1) & 0xFFFF);
    parentObj.programCounter = (parentObj.programCounter + 2) & 0xFFFF;
}