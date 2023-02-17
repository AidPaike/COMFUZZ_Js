function(t) {
    var result = [];
    for (var i in t) {
        delete t[i];
        t[i] = i;
        result.push([i, t[i]]);
    }
    return result;
}