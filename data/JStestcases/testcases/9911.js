function(_1d, obj) {
    if (_1d === null) {
        _1d = {};
    }
    for (var i = 1; i < arguments.length; i++) {
        var o = arguments[i];
        if (typeof(o) != "undefined" && o !== null) {
            for (var k in o) {
                var v = o[k];
                if (typeof(_1d[k]) == "object" && typeof(v) == "object") {
                    arguments.callee(_1d[k], v);
                } else {
                    _1d[k] = v;
                }
            }
        }
    }
    return _1d;
}