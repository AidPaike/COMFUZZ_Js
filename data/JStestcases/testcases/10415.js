function(parentObj) {
    "use strict";
    parentObj.registerA ^= (parentObj.registersHL & 0xFF);
    parentObj.FZero = (parentObj.registerA == 0);
    parentObj.FSubtract = parentObj.FHalfCarry = parentObj.FCarry = false;
}