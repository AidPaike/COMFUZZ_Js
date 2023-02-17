function(a) {
    if (a + 0.1 === 0)
        return a;
    var b = 0.1,
        c = 0.1,
        d = 0.1,
        e = 0.1,
        f = 0.1;
    for (var i = 0; i < 5; ++i) {
        e = d;
        c = b;
        b = a;
        d = c;
        f = e;
    }
    return f;
}