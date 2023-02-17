function(x) {
    return x < 0 || (x === 0 && (1 / x) === -Infinity);
}