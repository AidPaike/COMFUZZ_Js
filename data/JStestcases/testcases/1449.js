function(res, start) {
    var end = Math.min(start + 1024, this.buf.length);
    var content = this.buf.substring(start, end);
    res.write(content);
    if (end < this.buf.length) {
        setTimeout(this.send.bind(this, res, end), 10);
    } else {
        res.end();
    }
}