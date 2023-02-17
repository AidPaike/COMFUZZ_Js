function() {
    return function(c) {
        var double_var = [3.0, 3.5][0];
        var literal = c ? [1, double_var] : [double_var, 3.5];
        return literal[0];
    };
}