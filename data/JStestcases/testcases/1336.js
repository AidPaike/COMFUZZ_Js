function(a, b) {
    a |= 0;
    b |= 0;
    if (a >= b) {
        if (a + 1 === 0x3fffffff + 1)
            return a + 1;
    }
    return 0;
}