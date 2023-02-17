function(data, encoding, cb) {
    if (!Buffer.isBuffer(data)) {
        return this._write(new Buffer(data, encoding), null, cb);
    } else {
        return this._write(data, encoding, cb);
    }
}