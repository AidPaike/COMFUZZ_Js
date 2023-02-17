function(aRequest) {
    this.command_id = this.getCommandId();
    let timeout = parseInt(aRequest.parameters.ms);
    if (isNaN(timeout)) {
        this.sendError("Not a Number", 500, null, this.command_id);
    } else {
        this.searchTimeout = timeout;
        this.sendOk(this.command_id);
    }
}