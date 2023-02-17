function() {
    var x = 42;
    while (true) {
        const y = x;
        if (--x == 0) return y;
    }
}