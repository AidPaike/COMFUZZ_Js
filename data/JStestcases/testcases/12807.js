function() {
    var frameBuffer = this.frameBuffer;
    var swizzledFrame = this.swizzledFrame;
    var bufferIndex = 0;
    for (var canvasIndex = 0; canvasIndex < 69120;) {
        swizzledFrame[canvasIndex++] = (frameBuffer[bufferIndex] >> 16) & 0xFF; //Red
        swizzledFrame[canvasIndex++] = (frameBuffer[bufferIndex] >> 8) & 0xFF; //Green
        swizzledFrame[canvasIndex++] = frameBuffer[bufferIndex++] & 0xFF; //Blue
    }
}