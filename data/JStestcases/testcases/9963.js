function() {
    var o = [1, 2, 3];
    var result = 0;
    for (var i = 0; i < 100; ++i) {
        for (var s in o) {
            s = 0;
            result += o[s];
        }
    }
    return result;
}