function(obj) {
    var ret = 0;
    for (var x in obj) {
        var y = x;
        ret += obj[y];
    }
    return ret;
}