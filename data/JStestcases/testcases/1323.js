function(pairs) {
    var count = pairs.readUInt32BE(0, true),
        headers = {};
    pairs = pairs.slice(4);

    function readString() {
        var len = pairs.readUInt32BE(0, true),
            value = pairs.slice(4, 4 + len);
        pairs = pairs.slice(4 + len);
        return value.toString();
    }
    while (count > 0) {
        headers[readString().replace(/^:/, '')] = readString();
        count--;
    }
    return headers;
}