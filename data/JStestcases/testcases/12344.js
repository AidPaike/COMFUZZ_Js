function() {
    var ival = 2147483647 - 7;
    for (var i = 0; i < 30; i++) {
        ival += 2;
    }
    return (ival < 2147483647);
}