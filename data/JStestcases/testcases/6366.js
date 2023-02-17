function(x) {
    var sum = 0;
    var outer = 1000000;
    var a = 1,
        b = 2,
        c = 3,
        d = 4,
        e = 5;
    while (outer > 0) {
        a = a + 5;
        b = b + 4;
        c = c + 3;
        d = d + 2;
        e = e + 1;
        outer--;
    }
    return a + b + c + d + e;
}