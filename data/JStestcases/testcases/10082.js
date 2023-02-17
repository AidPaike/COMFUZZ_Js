function(o, prop, writable, enumerable) {
    writable = writable || false;
    enumerable = enumerable || false;
    return Object.defineProperty(o, prop, {
        value: 1,
        configurable: false,
        writable: writable,
        enumerable: enumerable
    });
}