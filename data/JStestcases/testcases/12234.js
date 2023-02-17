function() {
    this.command_id = this.getCommandId();
    if (this.context == "chrome") {
        let curWindow = this.getCurrentWindow();
        let XMLSerializer = curWindow.XMLSerializer;
        let pageSource = new XMLSerializer().serializeToString(curWindow.document);
        this.sendResponse(pageSource, this.command_id);
    } else {
        this.sendAsync("getPageSource", {}, this.command_id);
    }
}