function(x) {
    x = x & 0x3fffffff;
    x++;
    return x;
}