function(t) {
    var result = [];
    for (var i in t) {
        result.push([i, t[i]]);
    }
    return result;
}