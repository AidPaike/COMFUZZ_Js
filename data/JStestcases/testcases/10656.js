function(parentObj) {
    "use strict";
    var dirtySum = parentObj.registersHL + ((parentObj.registerB << 8) | parentObj.registerC);
    parentObj.FHalfCarry = ((parentObj.registersHL & 0xFFF) > (dirtySum & 0xFFF));
    parentObj.FCarry = (dirtySum > 0xFFFF);
    parentObj.registersHL = dirtySum & 0xFFFF;
    parentObj.FSubtract = false;
}