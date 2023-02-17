function(aRequest) {
    this.command_id = this.getCommandId();
    let serId = aRequest.parameters.id;
    let x = aRequest.parameters.x;
    let y = aRequest.parameters.y;
    if (this.context == "chrome") {
        this.sendError("Command 'singleTap' is not available in chrome context", 500, null, this.command_id);
    } else {
        this.sendAsync("singleTap", {
                id: serId,
                corx: x,
                cory: y
            },
            this.command_id);
    }
}