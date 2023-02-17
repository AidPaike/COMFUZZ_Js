function() {
    var y = 0;
    return function foo(x) {
        var a = new Float64Array(32);
        a[0] = 42;
        y = x + 0.1; // This has to allocate.
        return a[0];
    }
}