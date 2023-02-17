function(parentObj) {
    "use strict";
    var L = (parentObj.registersHL + 1) & 0xFF;
    parentObj.FZero = (L == 0);
    parentObj.FHalfCarry = ((L & 0xF) == 0);
    parentObj.FSubtract = false;
    parentObj.registersHL = (parentObj.registersHL & 0xFF00) | L;
}