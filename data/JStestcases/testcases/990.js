function() {
    var x = {};
    var map = new WeakMap();
    map.set(x, {
        "foo": x
    });
    return map;
}