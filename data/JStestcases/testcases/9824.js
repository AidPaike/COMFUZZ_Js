function(o, c) {
    var n = 0;
    for (var i = 0; i < 2; i++) {
        n += o.x ^ c;
    }
    return n;
}