function(a, b) {
    var c = {},
        d;
    for (d in a)
        if (a.hasOwnProperty(d) && a[d] !== b[d]) c[d] = a[d];
    return c
}