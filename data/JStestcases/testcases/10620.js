function(parentObj) {
    "use strict";
    parentObj.FHalfCarry = true;
    parentObj.FSubtract = false;
    parentObj.FZero = ((parentObj.registerB & 0x01) == 0);
}