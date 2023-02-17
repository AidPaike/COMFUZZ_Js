function(x, constructor) {
    x[42] = null;
    return x[42] === undefined;
}