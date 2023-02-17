function(msg) {
    if (this.type() == 'beforeunload') {
        this._confirmUnload = msg;
        this._event.returnValue = msg;
    }
}