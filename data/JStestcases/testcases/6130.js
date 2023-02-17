function(k, v) {
    if (k == "a") {
        Object.defineProperty(this, "b", {
            enumerable: true,
            configurable: false,
            writable: false,
            value: 2
        });
        return 8;
    }
    if (k == "b") {
        return 9;
    }
    return v;
}