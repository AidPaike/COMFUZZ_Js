function() {
    if (this.drewBlank == 0) {
        this.clearFrameBuffer();
        this.drewFrame = true;
    }
    this.drewBlank = 2;
}