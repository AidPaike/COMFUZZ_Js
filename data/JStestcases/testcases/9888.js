function(abort, n, a, b) {
    if (abort) return;
    var x = a ? true : "" + a;
    if (!a) {
        var dead = n + 1 + 1;
        if (!b) {
            x = dead;
        }
        if (x) {
            x = false;
        }
        if (b) {
            x = false;
        }
    }
    return x + 1;
}