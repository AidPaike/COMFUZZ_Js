function(o) {
    var x;
    if (o.f)
        x = o.g;
    else
        x = o.h;
    if (x != null)
        return x - 1;
    else
        return x;
}