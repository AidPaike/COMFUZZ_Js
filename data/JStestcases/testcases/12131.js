function(x) {
    var s = Math.floor(x / 3600);
    Math.floor(s);
    return s % 24;
}