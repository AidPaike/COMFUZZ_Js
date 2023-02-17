function(t) {
    var result = [];
    for (var i in t) {
        for (var j in t) {
            result.push(i + j + t[i] + t[j]);
            continue;
        }
    }
    return result.join('');
}