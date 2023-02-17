function(parentObj, address, data) {
    "use strict";
    parentObj.memory[address - 0x2000] = data;
}