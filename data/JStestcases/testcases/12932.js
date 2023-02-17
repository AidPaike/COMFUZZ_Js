function(o) {
    var x;
    if (o.f)
        x = o.g;
    else
        x = o.h;
    return [typeof x, x - 1];
}