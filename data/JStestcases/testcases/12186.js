function(x, y) {
    var t = 9;
    if (x) {
        t = 19;
    } else {
        t = 12;
        if (y) {
            t = 15;
        } else {
            t = 4;
        }
    }
    t = t + 1;
    if (x - 1) {
        t = y;
    } else {
        if (y) {
            t = 15;
        }
    }
    return t;
}