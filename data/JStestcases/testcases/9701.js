function(parentObj) {
    parentObj.registerE = parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter);
    parentObj.registerD = parentObj.memoryRead((parentObj.programCounter + 1) & 0xFFFF);
    parentObj.programCounter = (parentObj.programCounter + 2) & 0xFFFF;
}