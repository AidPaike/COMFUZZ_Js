function() {
    var s = "[0";
    for (var i = 0; i < (128 << 10); i++) {
        s += ",0";
    }
    s += "]";
    return eval(s);
}