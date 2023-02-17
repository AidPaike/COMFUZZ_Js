function() {
    var x = -Infinity;
    var i = 0;
    for (; i < 1; i += x) {
        if (i == -Infinity) x = +Infinity;
    }
    return i;
}