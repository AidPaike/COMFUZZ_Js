function() {
    this.CPUStopped = true; //Stop CPU until joypad input changes.
    this.iterationEndRoutine();
    if (this.emulatorTicks < 0) {
        this.audioTicks -= this.emulatorTicks;
        this.audioJIT();
    }
}