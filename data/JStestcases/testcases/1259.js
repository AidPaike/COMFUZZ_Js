function(o, c) {
    var n = 0;
    for (var i = 0; i < 2; i++) {
        if (o.x == c) {
            n += o.x;
        } else {
            n -= o.x;
        }
    }
    return n;
}