function(a, b) {
    var x = a | 0;
    var y = b | 0;
    return a; // x and y are both dead
}