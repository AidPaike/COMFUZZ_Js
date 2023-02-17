function() {
    var sequence = "";
    for (var a in [0, 1]) {
        L: {
            for (var b in [2, 3, 4]) {
                break L;
            }
        }
        sequence += a;
    }
    return sequence;
}