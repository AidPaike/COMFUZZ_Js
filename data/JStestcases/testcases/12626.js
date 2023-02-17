function(a, b) {
    a = a | 0;
    b = b | 0;
    return +(((a >>> 0) - (b >>> 0)) >>> 0);
}