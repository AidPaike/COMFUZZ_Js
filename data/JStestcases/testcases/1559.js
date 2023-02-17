function(parentObj, address) {
    "use strict";
    return (parentObj.modeSTAT > 1) ? 0xFF : parentObj.memory[address];
}