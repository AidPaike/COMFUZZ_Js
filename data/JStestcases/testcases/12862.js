function(a, b) {
    a = a ? "1" : "0";
    b = b ? "1" : "0";
    var x = a + "0";
    var y = b + "0";
    return a; // x and y are both dead
}