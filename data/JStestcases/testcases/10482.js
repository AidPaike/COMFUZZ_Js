function(c) {
    return String.fromCharCode(((c - 0x10000) >>> 10) & 0x3FF | 0xD800) +
        String.fromCharCode(c & 0x3FF | 0xDC00);
}