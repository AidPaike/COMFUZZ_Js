function() {
    "use strict";
    if (this.channel2Enabled) {
        this.channel2currentSampleLeftSecondary = this.channel2currentSampleLeft;
        this.channel2currentSampleRightSecondary = this.channel2currentSampleRight;
    } else {
        this.channel2currentSampleLeftSecondary = 0;
        this.channel2currentSampleRightSecondary = 0;
    }
    this.channel2OutputLevelTrimaryCache();
}