function(parentObj) {
    "use strict";
    var dirtySum = parentObj.registerA + parentObj.registerD;
    parentObj.FHalfCarry = ((dirtySum & 0xF) < (parentObj.registerA & 0xF));
    parentObj.FCarry = (dirtySum > 0xFF);
    parentObj.registerA = dirtySum & 0xFF;
    parentObj.FZero = (parentObj.registerA == 0);
    parentObj.FSubtract = false;
}