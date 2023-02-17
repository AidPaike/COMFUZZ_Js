function(x, y) {
    if (x == void 0 && y == void 0 && typeof x == "undefined" && typeof y == "undefined") {
        return +0;
    }
    if (x == void 0 && typeof x == "undefined") {
        return 1;
    }
    if (y == void 0 && typeof y == "undefined") {
        return -1;
    }
    x = String(x);
    y = String(y);
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
}