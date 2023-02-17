function(a, b) {
    a = a.f;
    b = b.f;
    var c = a.length + b.length;
    if (a === b)
        return c + 1;
    else
        return c - 1;
}