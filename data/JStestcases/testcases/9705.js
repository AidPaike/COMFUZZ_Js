function(type, cutoff, resonance, sampleRate) {
    this.type = type;
    this.cutoff = cutoff;
    this.resonance = resonance;
    this.sampleRate = sampleRate;
    this.f = Array(4);
    this.f[0] = 0.0; // lp
    this.f[1] = 0.0; // hp
    this.f[2] = 0.0; // bp
    this.f[3] = 0.0; // br  
    this.calcCoeff = function(cutoff, resonance) {
        this.freq = 2 * Math.sin(Math.PI * Math.min(0.25, cutoff / (this.sampleRate * 2)));
        this.damp = Math.min(2 * (1 - Math.pow(resonance, 0.25)), Math.min(2, 2 / this.freq - this.freq * 0.5));
    };
    this.calcCoeff(cutoff, resonance);
}