function(a) {
    var x = a;
    for (var i = 0; i < 100000; ++i)
        x += 1;
    for (var i = 0; i < 160097152; ++i)
        x += 2147483647;
    return x | 0;
}