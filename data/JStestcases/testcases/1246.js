function(a, b) {
    a = a | 0;
    b = b | 0;
    if ((a >>> 0) == (b >>> 0)) {
        return 1;
    }
    return 0;
}