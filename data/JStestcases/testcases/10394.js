function() {
    this.command_id = this.getCommandId();
    if (this.context == "chrome") {
        if (this.curFrame) {
            let frameUid = this.curBrowser.elementManager.addToKnownElements(this.curFrame.frameElement);
            this.sendResponse(frameUid, this.command_id);
        } else {
            this.sendResponse(null, this.command_id);
        }
    } else {
        this.sendResponse(this.currentFrameElement, this.command_id);
    }
}