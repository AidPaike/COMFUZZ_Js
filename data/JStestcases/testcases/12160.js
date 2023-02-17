function() {
    try {
        var o = {};
        Object.defineProperty(o, 'x', {
            value: 12,
            writable: false
        });
        o.x = 13;
    } catch (e) {
        return true;
    }
    return false;
}