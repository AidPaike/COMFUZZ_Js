function(o, b) {
    var x = 0;
    var y = 0;
    for (var i = 1; i < 10000; i++) {
        x = (o.x + o.x + o.x + o.x + o.x) & 0x3FFFF;
        o.x = x + y;
        y = (o.x + o.x + o.x + o.x + o.x) & 0xFFFF;
    }
    return x + y;
}