function() {
    if (this._modifier !== null) {
        return this._modifier;
    }
    var m = {};
    m.alt = this._event.altKey;
    m.ctrl = this._event.ctrlKey;
    m.meta = this._event.metaKey || false;
    m.shift = this._event.shiftKey;
    m.any = m.alt || m.ctrl || m.shift || m.meta;
    this._modifier = m;
    return m;
}