function() {
    var o = {
        b: 1
    };
    var a = o;
    a.b += a = 2;
    return o.b;
}