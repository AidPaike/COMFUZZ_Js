function(real, imag) {
    var bufferSize = this.bufferSize,
        cosTable = this.cosTable,
        sinTable = this.sinTable,
        reverseTable = this.reverseTable,
        spectrum = this.spectrum;
    real = real || this.real;
    imag = imag || this.imag;
    for (var i = 0; i < bufferSize; i++) {
        imag[i] *= -1;
    }
    var revReal = new Array(bufferSize);
    var revImag = new Array(bufferSize);
    for (var i = 0; i < real.length; i++) {
        revReal[i] = real[reverseTable[i]];
        revImag[i] = imag[reverseTable[i]];
    }
    real = revReal;
    imag = revImag;
    var halfSize = 1,
        phaseShiftStepReal,
        phaseShiftStepImag,
        currentPhaseShiftReal,
        currentPhaseShiftImag,
        off,
        tr,
        ti,
        tmpReal,
        i;
    while (halfSize < bufferSize) {
        phaseShiftStepReal = cosTable[halfSize];
        phaseShiftStepImag = sinTable[halfSize];
        currentPhaseShiftReal = 1;
        currentPhaseShiftImag = 0;
        for (var fftStep = 0; fftStep < halfSize; fftStep++) {
            i = fftStep;
            while (i < bufferSize) {
                off = i + halfSize;
                tr = (currentPhaseShiftReal * real[off]) - (currentPhaseShiftImag * imag[off]);
                ti = (currentPhaseShiftReal * imag[off]) + (currentPhaseShiftImag * real[off]);
                real[off] = real[i] - tr;
                imag[off] = imag[i] - ti;
                real[i] += tr;
                imag[i] += ti;
                i += halfSize << 1;
            }
            tmpReal = currentPhaseShiftReal;
            currentPhaseShiftReal = (tmpReal * phaseShiftStepReal) - (currentPhaseShiftImag * phaseShiftStepImag);
            currentPhaseShiftImag = (tmpReal * phaseShiftStepImag) + (currentPhaseShiftImag * phaseShiftStepReal);
        }
        halfSize = halfSize << 1;
    }
    var buffer = new Array(bufferSize);
    for (var i = 0; i < bufferSize; i++) {
        buffer[i] = real[i] / bufferSize;
    }
    return buffer;
}