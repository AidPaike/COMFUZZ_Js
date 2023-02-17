function() {
    var sum = 0;
    for (var i = 0; i < 500; ++i) {
        sum = (i + sum) | 0;
    }
    return sum;
}