function() {
    var map = new WeakMap();
    map.set.call(new Map(), {}, 1);
}