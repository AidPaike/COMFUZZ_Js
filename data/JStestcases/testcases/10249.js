function() {
    "use strict"; //Scan Line Drawing Period
    if (this.modeSTAT != 3) {
        if (this.STATTracker == 0 && this.mode2TriggerSTAT) {
            this.interruptsRequested |= 0x2;
            this.checkIRQMatching();
        }
        this.STATTracker = 1;
        this.modeSTAT = 3;
    }
}