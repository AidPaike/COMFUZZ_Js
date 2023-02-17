function(parentObj) {
    "use strict";
    var newFCarry = (parentObj.registerE > 0x7F);
    parentObj.registerE = ((parentObj.registerE << 1) & 0xFF) | ((parentObj.FCarry) ? 1 : 0);
    parentObj.FCarry = newFCarry;
    parentObj.FHalfCarry = parentObj.FSubtract = false;
    parentObj.FZero = (parentObj.registerE == 0);
}