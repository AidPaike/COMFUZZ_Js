function() {
    var sum = 0;
    var ret = 0;
    for (var i = 0; i < 90000; i++) {
        sum += i;
        if (i == 0) ret = function() {
            return sum;
        }
    }
    return ret;
}