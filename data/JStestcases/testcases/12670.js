function(parentObj, address, data) {
    "use strict";
    parentObj.currMBCRAMBank = data;
    if (data < 4) {
        parentObj.currMBCRAMBankPosition = (parentObj.currMBCRAMBank << 13) - 0xA000;
    }
}