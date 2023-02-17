function() {
    var eval = function(x) {
        return 2 * x;
    };
    return (function() {
        return eval(2);
    })();
}