function() {
    if (this._converter) {
        this._converter.flush();
        this._converter.close();
    }
    this._foStream = null;
    this._converter = null;
    this._file = null;
}