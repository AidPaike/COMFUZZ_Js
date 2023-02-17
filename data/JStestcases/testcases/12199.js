function(func) {
    return {
        __proto__: func(),
        __proto__(x, y) {
            return x + y;
        },
        a: 42
    };
}