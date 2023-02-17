function(a) {
    "use strict";
    a = 42;
    var res = {};
    var args = arguments;
    res.a = function() {
        return a;
    };
    res.arg = function() {
        return args[0];
    };
    return res;
}