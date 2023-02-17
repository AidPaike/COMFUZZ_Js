function(parentObj) {
    "use strict";
    parentObj.stackPointer = (parentObj.stackPointer - 1) & 0xFFFF;
}