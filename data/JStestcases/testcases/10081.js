function(a, b) {
    var rv = {};
    var p;
    for (p in a) {
        rv[p] = a[p];
    }
    for (p in b) {
        rv[p] = b[p];
    }
    return rv;
}