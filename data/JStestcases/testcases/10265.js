function(o, c) {
    var n = 0;
    for (var i = 0; i < 2; i++) {
        var b = o.x > c;
        if (b) {
            n += o.x;
        } else {
            n -= o.x;
        }
    }
    return n;
}