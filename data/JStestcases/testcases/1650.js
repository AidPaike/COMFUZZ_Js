function(a, b, o) {
    var x = a >>> b;
    return o.f + (x | 0);
}