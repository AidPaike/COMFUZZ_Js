function(a, b) {
    a %= 3;
    b = b >> a;
    return b;
}