function(timeout) {
    if (this._mode === 'tls') {
        this._server.timeout = timeout;
    }
}