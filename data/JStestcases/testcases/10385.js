function(code) {
    if (code <= 0xFFFF) {
        return String.fromCharCode(code);
    } else {
        return String.fromCharCode(((code - 0x10000) >> 10) + 0xD800, ((code - 0x10000) & 1023) + 0xDC00);
    }
}