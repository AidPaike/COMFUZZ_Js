function(parentObj, address) {
    "use strict";
    return parentObj.GBCMemory[address + parentObj.gbcRamBankPositionECHO];
}