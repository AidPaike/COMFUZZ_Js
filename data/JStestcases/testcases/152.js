function(event) {
    if (!this.dragging) {
        return;
    }
    this.stopScrolling();
    this.finishDrag(event, true);
    event.stop();
}