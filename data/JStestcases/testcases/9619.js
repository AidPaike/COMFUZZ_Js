function() {
    var s = new WeakSet();
    s.has.call(null, {});
}