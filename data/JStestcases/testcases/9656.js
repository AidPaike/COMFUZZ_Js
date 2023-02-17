function(parentObj, address, data) {
    "use strict";
    if (parentObj.modeSTAT < 2) { //OAM RAM cannot be written to in mode 2 & 3
        if (parentObj.memory[address] != data) {
            parentObj.graphicsJIT();
            parentObj.memory[address] = data;
        }
    }
}