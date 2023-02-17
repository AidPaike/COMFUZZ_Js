function(test, x, y, z) {
    test((handler) => {
        return new Proxy(() => {}, handler)
    }, x, y, z)
}