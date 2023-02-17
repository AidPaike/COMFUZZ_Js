function(parentObj) {
    "use strict";
    parentObj.registerA &= parentObj.registerC;
    parentObj.FZero = (parentObj.registerA == 0);
    parentObj.FHalfCarry = true;
    parentObj.FSubtract = parentObj.FCarry = false;
}