function(parentObj) {
    "use strict";
    parentObj.registersHL = (parentObj.registersHL & 0xFF00) | ((parentObj.registersHL & 0xF) << 4) | ((parentObj.registersHL & 0xF0) >> 4);
    parentObj.FZero = ((parentObj.registersHL & 0xFF) == 0);
    parentObj.FCarry = parentObj.FHalfCarry = parentObj.FSubtract = false;
}