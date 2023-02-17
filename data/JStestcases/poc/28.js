function(o) {
    var a = [o];
    a.length = a[0];
    var useless = function() {}
    var sz = Array.prototype.push.call(a, 42, 43);
    (function() {
        sz;
    })(new Boolean(false));
}