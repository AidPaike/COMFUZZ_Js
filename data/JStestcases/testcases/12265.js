function(a) {
    var x = a;
    return function(p) {
        if (p) {
            var tmp = x;
            return x;
        }
        return 42;
    };
}