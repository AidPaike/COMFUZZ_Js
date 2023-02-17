function() {
    "use strict"; //Horizontal Blanking Period
    if (this.modeSTAT != 0) {
        if (this.STATTracker != 2) {
            if (this.STATTracker == 0) {
                if (this.mode2TriggerSTAT) {
                    this.interruptsRequested |= 0x2;
                    this.checkIRQMatching();
                }
                this.modeSTAT = 3;
            }
            this.incrementScanLineQueue();
            this.updateSpriteCount(this.actualScanLine);
            this.STATTracker = 2;
        }
        if (this.LCDTicks >= this.spriteCount) {
            if (this.hdmaRunning) {
                this.executeHDMA();
            }
            if (this.mode0TriggerSTAT) {
                this.interruptsRequested |= 0x2;
                this.checkIRQMatching();
            }
            this.STATTracker = 3;
            this.modeSTAT = 0;
        }
    }
}