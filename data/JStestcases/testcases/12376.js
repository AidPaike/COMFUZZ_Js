function(parentObj) {
    "use strict";
    var tempValue = parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL);
    var dirtySum = parentObj.registerA + tempValue + ((parentObj.FCarry) ? 1 : 0);
    parentObj.FHalfCarry = ((parentObj.registerA & 0xF) + (tempValue & 0xF) + ((parentObj.FCarry) ? 1 : 0) > 0xF);
    parentObj.FCarry = (dirtySum > 0xFF);
    parentObj.registerA = dirtySum & 0xFF;
    parentObj.FZero = (parentObj.registerA == 0);
    parentObj.FSubtract = false;
}