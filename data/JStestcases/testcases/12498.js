function(parentObj) {
    "use strict";
    if ((parentObj.interruptsEnabled & parentObj.interruptsRequested & 0x1F) > 0) {
        if (!parentObj.cGBC && !parentObj.usedBootROM) {
            parentObj.skipPCIncrement = true;
        } else {
            parentObj.CPUTicks += 4;
        }
    } else {
        parentObj.calculateHALTPeriod();
    }
}