function() {
    "use strict"; //OAM Search Period
    if (this.STATTracker != 1) {
        if (this.mode2TriggerSTAT) {
            this.interruptsRequested |= 0x2;
            this.checkIRQMatching();
        }
        this.STATTracker = 1;
        this.modeSTAT = 2;
    }
}