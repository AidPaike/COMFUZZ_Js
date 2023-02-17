function(t, deopt) {
    var result = [];
    outer: for (var i in t) {
        for (var j in t) {
            result.push([i, j, t[i], t[j]]);
            break outer;
        }
    }
    deopt.deopt;
    return result;
}