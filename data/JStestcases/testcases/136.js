function(a) {
    var b, c, d, r;
    if (a + 0.1 === 0)
        return a;
    b = a;
    if (b + 0.1 === 0)
        return b;
    c = b;
    if (c + 0.1 === 0)
        return c;
    for (var i = 0; i < 3; ++i) {
        d = c;
        c = b;
        b = a;
        if (d === 0)
            r = a;
        else
            r = -1;
        a = test3a(a);
        if (a + 0.1 === 0)
            return a;
    }
    return r;

    function test3a(a) {
        return a;
    }
}