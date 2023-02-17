function(parentObj, address) {
    "use strict";
    return (parentObj.modeSTAT > 2) ? 0xFF : parentObj.memory[address];
}