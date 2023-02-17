function(o, c) {
    var n = 0;
    for (var i = 0; i < 2; i++) {
        n += (-o.x << 10) >>> c;
    }
    return n;
}