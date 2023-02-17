function(a, n) {
    var r, i;
    r = 1;
    for (i = 0; i < n; i++)
        r *= a;
    return r;
}