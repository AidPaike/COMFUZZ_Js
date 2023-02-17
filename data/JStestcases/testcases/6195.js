function(delayInSamples) {
    this.delayInSamples = delayInSamples;
    for (var i = 0; i < this.NR_OF_SINGLEDELAYS; i++) {
        var delayMultiply = 1.0 + (i / 7.0); // 1.0, 1.1, 1.2...
        this.singleDelays[i].setDelayInSamples(Math.round(this.delayInSamples * delayMultiply));
    }
    for (var i = 0; i < this.NR_OF_MULTIDELAYS; i++) {
        var delayMultiply = 1.0 + (i / 10.0); // 1.0, 1.1, 1.2...
        this.multiDelays[i].setDelayInSamples(Math.round(this.delayInSamples * delayMultiply));
    }
}