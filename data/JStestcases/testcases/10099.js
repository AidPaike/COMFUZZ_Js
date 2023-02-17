function(statusCode, reasonPhrase, headers) {
    if (this.headersSent) {
        return;
    }
    if (typeof reasonPhrase === 'string') {
        this._log.warn('Reason phrase argument was present but ignored by the writeHead method');
    } else {
        headers = reasonPhrase;
    }
    for (var name in headers) {
        this.setHeader(name, headers[name]);
    }
    headers = this._headers;
    if (this.sendDate && !('date' in this._headers)) {
        headers.date = (new Date()).toUTCString();
    }
    this._log.info({
        status: statusCode,
        headers: this._headers
    }, 'Sending server response');
    headers[':status'] = this.statusCode = statusCode;
    this.stream.headers(headers);
    this.headersSent = true;
}