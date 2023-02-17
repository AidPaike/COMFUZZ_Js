function(server) {
    this.currentRemoteFrame = null; //holds a member of remoteFrames (for an OOP frame) or null (for the main process)
    this.previousRemoteFrame = null; //frame we'll need to restore once interrupt is gone
    this.handledModal = false; //set to true when we have been interrupted by a modal
    this.server = server; // a reference to the marionette server
}