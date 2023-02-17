function(proto) {
    var result = [];
    var o = {
        x: 1,
        __proto__: proto
    };
    for (var p in o)
        result.push(p);
    return result;
}