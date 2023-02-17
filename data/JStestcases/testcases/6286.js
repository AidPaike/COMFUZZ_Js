function(parentObj) {
    "use strict";
    parentObj.registerA = parentObj.memoryRead((parentObj.memoryRead((parentObj.programCounter + 1) & 0xFFFF) << 8) | parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter));
    parentObj.programCounter = (parentObj.programCounter + 2) & 0xFFFF;
}