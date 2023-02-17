function(parentObj) {
    "use strict";
    parentObj.registerA ^= parentObj.registerE;
    parentObj.FZero = (parentObj.registerA == 0);
    parentObj.FSubtract = parentObj.FHalfCarry = parentObj.FCarry = false;
}