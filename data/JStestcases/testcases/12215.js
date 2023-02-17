function() {
    var o1 = {
        a: 0
    };
    var o2 = o1;
    for (var i = 0; i < 1; ++i)
        for (; o2.a < 1; ++o2.a)
            o1.a = 1;
}