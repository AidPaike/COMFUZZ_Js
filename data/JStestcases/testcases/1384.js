function() {
    for (var i = 0; i < arguments.length; i++) {
        var o = arguments[i];
        var typ = typeof(o);
        if (
            (typ != 'object' && !(typ == 'function' && typeof(o.item) == 'function')) ||
            o === null ||
            typeof(o.length) != 'number' ||
            o.nodeType === 3
        ) {
            return false;
        }
    }
    return true;
}