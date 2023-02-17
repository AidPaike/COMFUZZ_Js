function() {
    var i = 10000;
    return function() {
        if (i-- > 0) return i;
        throw "done";
    }
}