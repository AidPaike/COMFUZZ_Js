function(parentObj) {
    "use strict";
    parentObj.registerA = parentObj.memoryHighRead(parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter));
    parentObj.programCounter = (parentObj.programCounter + 1) & 0xFFFF;
}