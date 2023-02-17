function(parentObj) {
    "use strict";
    parentObj.FHalfCarry = ((parentObj.registersHL & 0xFFF) > 0x7FF);
    parentObj.FCarry = (parentObj.registersHL > 0x7FFF);
    parentObj.registersHL = (parentObj.registersHL << 1) & 0xFFFF;
    parentObj.FSubtract = false;
}