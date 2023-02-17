function(parentObj) {
    "use strict";
    parentObj.FHalfCarry = true;
    parentObj.FSubtract = false;
    parentObj.FZero = ((parentObj.registersHL & 0x4000) == 0);
}