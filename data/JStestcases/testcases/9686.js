function() {
    var n = function() {}
    return n(/[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?/g, function() {});
}