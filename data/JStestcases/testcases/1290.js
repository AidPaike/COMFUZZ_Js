function(o, p) {
    var x = o.f;
    if (p)
        return function() {
            return x;
        }
    else {
        var a = x;
        var b = x;
        return [a, b];
    }
}