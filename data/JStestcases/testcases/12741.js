function(parentObj) {
    "use strict";
    var dirtySum = parentObj.registerA - parentObj.memoryReader[parentObj.programCounter](parentObj, parentObj.programCounter);
    parentObj.programCounter = (parentObj.programCounter + 1) & 0xFFFF;
    parentObj.FHalfCarry = ((dirtySum & 0xF) > (parentObj.registerA & 0xF));
    parentObj.FCarry = (dirtySum < 0);
    parentObj.FZero = (dirtySum == 0);
    parentObj.FSubtract = true;
}