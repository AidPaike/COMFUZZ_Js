function(x, y) {
    var xS = String(x);
    var yS = String(y);
    if (xS < yS) return 1
    if (xS > yS) return -1;
    return 0;
}