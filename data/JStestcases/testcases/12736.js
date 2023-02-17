function(array) {
    function t(a, b, c) {
        return arguments.length;
    }
    return t.apply(null, array);
}