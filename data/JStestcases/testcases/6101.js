function() {
    if (this.stream) {
        if (this._trailers) {
            if (this.request) {
                this.request.addTrailers(this._trailers);
            } else {
                this.stream.headers(this._trailers);
            }
        }
        this.stream.end();
    } else {
        this.once('socket', this._finish.bind(this));
    }
}