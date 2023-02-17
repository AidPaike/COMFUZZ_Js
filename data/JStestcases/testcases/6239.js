function(value) {
    var p = new Proxy(value, {
        construct: () => ({})
    });
    try {
        return new p, true;
    } catch (e) {
        return false;
    }
}