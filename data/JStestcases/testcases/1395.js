function(a) {
    var sum = 0;
    var inc = a ? 100 : 200;
    var x = a ? 5 : 6;
    var y = a ? 7 : 8;
    for (var i = 0; i < 100000; i++) {
        sum += inc;
    }
    return sum ? x : y;
}