function(foo) {
    var g;
    true ? (g = 0.1) : g |= null;
    if (null != g) {}
}