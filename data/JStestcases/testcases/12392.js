function(factor, ...values) {
    var result = 0;
    for (var i = 0; i < values.length; ++i) {
        result += (factor * values[i]);
    }
    return result;
}