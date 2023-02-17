function(obj) {
    var ret = 0;
    for (var x in obj) {
        ret += obj[x];
    }
    return ret;
}