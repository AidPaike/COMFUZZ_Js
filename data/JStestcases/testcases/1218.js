function() {
    switch (this.ROMBank1offs) {
        case 0x00:
        case 0x20:
        case 0x40:
        case 0x60:
            this.currentROMBank = (this.ROMBank1offs % this.ROMBankEdge) << 14;
            break;
        default:
            this.currentROMBank = ((this.ROMBank1offs % this.ROMBankEdge) - 1) << 14;
    }
}