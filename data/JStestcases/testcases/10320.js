function(parentObj) {
    "use strict";
    parentObj.registerA |= parentObj.memoryReader[parentObj.registersHL](parentObj, parentObj.registersHL);
    parentObj.FZero = (parentObj.registerA == 0);
    parentObj.FSubtract = parentObj.FCarry = parentObj.FHalfCarry = false;
}