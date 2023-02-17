function(a) {
    var limit = a ? 100001 : 100002;
    var r = 1;
    var x = a ? 1 : 2;
    var y = a ? 3 : 4;
    for (var i = 0; i < limit; i++) {
        r = r * -1;
    }
    var w = r > 0 ? x : y;
    var z = r > 0 ? y : x;
    return w === z;
}