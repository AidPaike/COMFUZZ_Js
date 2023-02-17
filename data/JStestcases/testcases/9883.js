function(b) {
    var m = 1,
        c = 0;
    while (m < 0x100) {
        if (b & m) c++;
        m <<= 1;
    }
    return 1;
}