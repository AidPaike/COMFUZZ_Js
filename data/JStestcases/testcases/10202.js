function(parentObj) {
    "use strict";
    parentObj.registerA ^= parentObj.registerB;
    parentObj.FZero = (parentObj.registerA == 0);
    parentObj.FSubtract = parentObj.FHalfCarry = parentObj.FCarry = false;
}