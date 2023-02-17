function(parentObj) {
    "use strict";
    parentObj.memoryWrite((parentObj.memoryRead((parentObj.programCounter + 1) & 0xFFFF) << 8) | parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter), parentObj.registerA);
    parentObj.programCounter = (parentObj.programCounter + 2) & 0xFFFF;
}