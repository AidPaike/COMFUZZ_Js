function(opt_gc) {
    var x = new Array(3);
    x[0] = 10;
    opt_gc();
    global[1] = 15.5;
    return x;
}