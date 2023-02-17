function(test, x, y, z) {
    test(function(h) {
        return new Proxy({}, h)
    }, x, y, z)
    test(function(h) {
        return new Proxy(function() {}, h)
    }, x, y, z)
}