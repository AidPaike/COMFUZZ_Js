function(t, prop) {
    var foo = {};
    Object.defineProperty(foo, "bar", {
        configurable: false,
        enumerable: true,
        value: 1
    });
    return Object.getOwnPropertyDescriptor(foo, prop);
}