function() {
    "use strict";
    if (this.channel1Enabled) {
        this.channel1currentSampleLeftSecondary = this.channel1currentSampleLeft;
        this.channel1currentSampleRightSecondary = this.channel1currentSampleRight;
    } else {
        this.channel1currentSampleLeftSecondary = 0;
        this.channel1currentSampleRightSecondary = 0;
    }
    this.channel1OutputLevelTrimaryCache();
}