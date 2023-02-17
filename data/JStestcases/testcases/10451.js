function() {
    var result = [];
    var o = {
        x: 1
    };
    for (var p in o)
        result.push(p);
    return result;
}