function(f, a) {
    var q;
    for (var i = 0; i < 10; ++i)
        q = f.apply(f, a);
    return q;
}