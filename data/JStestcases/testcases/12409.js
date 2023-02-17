function(a, i, v) {
    var result = a[i];
    a[i] = v;
    return result;
}