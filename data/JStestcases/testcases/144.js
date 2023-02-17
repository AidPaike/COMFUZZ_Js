function() {
    this.channel1Enabled = ((this.channel1consecutive || this.channel1totalLength > 0) && !this.channel1SweepFault && this.channel1canPlay);
    this.channel1OutputLevelSecondaryCache();
}