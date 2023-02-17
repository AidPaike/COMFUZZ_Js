function(parentObj) {
    "use strict";
    parentObj.memoryHighWrite(parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter), parentObj.registerA);
    parentObj.programCounter = (parentObj.programCounter + 1) & 0xFFFF;
}