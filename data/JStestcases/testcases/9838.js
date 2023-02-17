function(timePos) {
    if (timePos >= this.startOn) {
        if (timePos >= this.finishOn) {
            return this.finalize();
        }
        var pos = (timePos - this.startOn) / (this.finishOn - this.startOn);
        var frame =
            Math.round(pos * this.options.fps * this.options.duration);
        if (frame > this.currentFrame) {
            this.render(pos);
            this.currentFrame = frame;
        }
    }
}