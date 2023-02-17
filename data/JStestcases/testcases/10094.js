function() {
    "use strict"; //LYC Register Compare
    if (this.memory[0xFF44] == this.memory[0xFF45]) {
        this.memory[0xFF41] |= 0x04;
        if (this.LYCMatchTriggerSTAT) {
            this.interruptsRequested |= 0x2;
            this.checkIRQMatching();
        }
    } else {
        this.memory[0xFF41] &= 0x7B;
    }
}