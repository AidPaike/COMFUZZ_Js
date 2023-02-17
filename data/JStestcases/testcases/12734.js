function() {
    const proxy = new Proxy({}, {});
    Symbol.prototype.description.call(proxy);
}