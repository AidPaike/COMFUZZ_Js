function(n) {
    var r;
    for (var i = 0; i < 35; i++)
        r = 0x11010101 >> n;
    return r;
}