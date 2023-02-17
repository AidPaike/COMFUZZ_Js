function(a, b, c) {
    function t(a, b, c) {
        return arguments.length;
    }
    return t.apply(null, arguments);
}