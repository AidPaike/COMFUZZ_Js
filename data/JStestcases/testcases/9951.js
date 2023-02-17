function(x) {
    var a = 1;
    var b = 4000;
    var c = (a / b) + x;
    var d = 0;
    for (var i = 0; i < 1000; ++i)
        d++;
    return c + d;
}