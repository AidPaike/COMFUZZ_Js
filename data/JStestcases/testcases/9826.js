function(parentObj, address, data) {
    parentObj.GBCMemory[address + parentObj.gbcRamBankPositionECHO] = data;
}