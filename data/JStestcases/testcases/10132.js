function(x) {
    var c = {
        c: {} === {}
    };
    if (x) c.c = true;
    return c.c;
}