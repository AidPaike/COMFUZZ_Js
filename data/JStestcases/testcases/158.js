function(param) {
    var l = param;
    param = function() {
        return l;
    }
    return arguments[0];
}