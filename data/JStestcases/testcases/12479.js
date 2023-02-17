function(parentObj) {
    "use strict";
    parentObj.registerD = parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter);
    parentObj.programCounter = (parentObj.programCounter + 1) & 0xFFFF;
}