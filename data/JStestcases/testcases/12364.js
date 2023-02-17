function(i) {
    var x = i * 1;
    return ((x >>> 0) % 1000000000000) | 0;
}