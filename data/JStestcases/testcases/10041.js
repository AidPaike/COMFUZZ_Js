function(obj) {
    var _2f = [];
    var e;
    for (var _31 in obj) {
        var v;
        try {
            v = obj[_31];
        } catch (e) {
            continue;
        }
        _2f.push([_31, v]);
    }
    return _2f;
}