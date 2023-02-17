function() {
    this.currentROMBank = ((this.ROMBank1offs % this.ROMBankEdge) - 1) << 14;
}