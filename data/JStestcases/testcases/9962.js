function() {
    var s = new WeakSet();
    s.has.call(new Map(), {});
}