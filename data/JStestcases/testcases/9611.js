function(a, b) {
    a = a.f;
    b = b.f;
    var c = a.length + b.length;
    return [c, a === b];
}