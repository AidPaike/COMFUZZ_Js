function(messageManager) {
    messageManager.removeWeakMessageListener("Marionette:ok", this.server);
    messageManager.removeWeakMessageListener("Marionette:done", this.server);
    messageManager.removeWeakMessageListener("Marionette:error", this.server);
    messageManager.removeWeakMessageListener("Marionette:log", this.server);
    messageManager.removeWeakMessageListener("Marionette:shareData", this.server);
    messageManager.removeWeakMessageListener("Marionette:register", this.server);
    messageManager.removeWeakMessageListener("Marionette:runEmulatorCmd", this.server);
    messageManager.removeWeakMessageListener("Marionette:runEmulatorShell", this.server);
    messageManager.removeWeakMessageListener("Marionette:switchToFrame", this.server);
    messageManager.removeWeakMessageListener("Marionette:switchedToFrame", this.server);
    messageManager.removeWeakMessageListener("MarionetteFrame:handleModal", this);
    messageManager.removeWeakMessageListener("MarionetteFrame:getCurrentFrameId", this);
}