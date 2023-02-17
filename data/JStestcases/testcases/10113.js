function(obj) {
    var res = [];
    for (var i in obj) {
        res.push(i);
    }
    res.sort();
    return res;
}