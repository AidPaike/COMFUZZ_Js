function(callback) {
    if (this._prefEnvUndoStack.length > 0) {
        let cb = callback ? this._delayCallbackTwice(callback) : null;
        this._pendingPrefs.push([this._prefEnvUndoStack.pop(), cb]);
        this._applyPrefs();
    } else {
        this._setTimeout(callback);
    }
}