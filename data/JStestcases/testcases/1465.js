function() {
    if (this.LCDisOn) {
        this.totalLinesPassed = 0; //Mark frame for ensuring a JIT pass for the next framebuffer output.
        this.graphicsJITScanlineGroup();
    }
}