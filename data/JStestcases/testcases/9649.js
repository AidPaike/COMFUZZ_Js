function(parentObj) {
    "use strict";
    parentObj.registerE = parentObj.memoryReader[parentObj.stackPointer](parentObj, parentObj.stackPointer);
    parentObj.registerD = parentObj.memoryRead((parentObj.stackPointer + 1) & 0xFFFF);
    parentObj.stackPointer = (parentObj.stackPointer + 2) & 0xFFFF;
}