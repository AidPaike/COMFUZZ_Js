function(b, c) {
    var closure = function(b, c) {
        return b + c;
    }
    var value = b + c;
    return closure;
}