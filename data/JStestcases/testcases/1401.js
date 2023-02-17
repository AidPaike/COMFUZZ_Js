function(a, b, c) {
    return function() {
        delete arguments[1];
        return b;
    };
}