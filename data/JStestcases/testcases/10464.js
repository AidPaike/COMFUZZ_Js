function(parentObj, address, data) {
    "use strict";
    parentObj.GBCMemory[address + parentObj.gbcRamBankPosition] = data;
}