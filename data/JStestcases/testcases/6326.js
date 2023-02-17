function(oscillator) {
    for (var i = 0; i < this.bufferSize; i++) {
        this.signal[i] += oscillator.signal[i];
    }
    return this.signal;
}