function(parentObj) {
    "use strict";
    var dirtySum = (parentObj.registerA << 1) | ((parentObj.FCarry) ? 1 : 0);
    parentObj.FHalfCarry = ((((parentObj.registerA << 1) & 0x1E) | ((parentObj.FCarry) ? 1 : 0)) > 0xF);
    parentObj.FCarry = (dirtySum > 0xFF);
    parentObj.registerA = dirtySum & 0xFF;
    parentObj.FZero = (parentObj.registerA == 0);
    parentObj.FSubtract = false;
}