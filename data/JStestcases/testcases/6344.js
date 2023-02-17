function(bufferSize, sampleRate) {
    this.bufferSize = bufferSize;
    this.sampleRate = sampleRate;
    this.spectrum = new Array(bufferSize / 2);
    this.real = new Array(bufferSize);
    this.imag = new Array(bufferSize);
    this.reverseTable = new Array(bufferSize);
    var limit = 1;
    var bit = bufferSize >> 1;
    while (limit < bufferSize) {
        for (var i = 0; i < limit; i++) {
            this.reverseTable[i + limit] = this.reverseTable[i] + bit;
        }
        limit = limit << 1;
        bit = bit >> 1;
    }
    this.sinTable = new Array(bufferSize);
    this.cosTable = new Array(bufferSize);
    for (var i = 0; i < bufferSize; i++) {
        this.sinTable[i] = Math.sin(-Math.PI / i);
        this.cosTable[i] = Math.cos(-Math.PI / i);
    }
}