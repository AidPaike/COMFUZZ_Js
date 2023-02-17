function(f, delta) {
    return function(x) {
        return (f(x + delta) - 2 * f(x) + f(x - delta)) / (delta * delta)
    };
}