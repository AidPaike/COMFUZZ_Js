function(n) {
    var l = n * 1;
    var r = 'r';
    while (r.length < n) {
        r = r + r;
    }
    return r;
}