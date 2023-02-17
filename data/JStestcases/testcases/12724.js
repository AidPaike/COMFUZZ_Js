function(x, y) {
    if (x == y) {
        return x != 0 || y != 0 || (1 / x == 1 / y); // 0.0 != -0.0
    }
    return (x != x) && (y != y); // NaN == NaN
}