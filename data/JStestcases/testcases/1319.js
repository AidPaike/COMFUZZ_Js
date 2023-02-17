function() {
    var o = [7, , 5, 2, , , 6];
    for (var i = 0; i < o.length; i++) {
        delete o[i];
    }
    return o;
}