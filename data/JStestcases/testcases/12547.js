function(parentObj) {
    "use strict";
    parentObj.registersHL = (parentObj.registersHL + 1) & 0xFFFF;
}