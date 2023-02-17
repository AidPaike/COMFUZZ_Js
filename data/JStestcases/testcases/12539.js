function(a, b) {
    var x;
    var y;

    function baz() {
        return x + y;
    }
    x = 13;
    y = 16;
    if (y == 16) {
        return x + a + b + baz();
    } else
        return 24;
}