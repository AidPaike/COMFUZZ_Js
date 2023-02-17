function(aRequest) {
    let command_id = this.command_id = this.getCommandId();
    if (this.context == "chrome") {
        let id;
        try {
            let on_success = this.sendResponse.bind(this);
            let on_error = this.sendError.bind(this);
            id = this.curBrowser.elementManager.find(
                this.getCurrentWindow(),
                aRequest.parameters,
                this.searchTimeout,
                on_success,
                on_error,
                false,
                command_id);
        } catch (e) {
            this.sendError(e.message, e.code, e.stack, command_id);
            return;
        }
    } else {
        this.sendAsync("findElementContent", {
                value: aRequest.parameters.value,
                using: aRequest.parameters.using,
                element: aRequest.parameters.element,
                searchTimeout: this.searchTimeout
            },
            command_id);
    }
}