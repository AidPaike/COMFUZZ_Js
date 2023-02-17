function(parentObj, address, data) {
    if (parentObj.MBC1Mode) {
        parentObj.currMBCRAMBank = data & 0x03;
        parentObj.currMBCRAMBankPosition = (parentObj.currMBCRAMBank << 13) - 0xA000;
    } else {
        parentObj.ROMBank1offs = ((data & 0x03) << 5) | (parentObj.ROMBank1offs & 0x1F);
        parentObj.setCurrentMBC1ROMBank();
    }
}