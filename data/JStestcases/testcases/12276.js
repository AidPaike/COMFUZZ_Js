function(parentObj) {
    "use strict";
    parentObj.FCarry = (parentObj.registersHL > 0x7FFF);
    parentObj.registersHL = ((parentObj.registersHL << 1) & 0xFE00) | ((parentObj.FCarry) ? 0x100 : 0) | (parentObj.registersHL & 0xFF);
    parentObj.FHalfCarry = parentObj.FSubtract = false;
    parentObj.FZero = (parentObj.registersHL < 0x100);
}