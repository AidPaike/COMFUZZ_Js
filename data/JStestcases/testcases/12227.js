function(a) {
    if (a + 0.1 === 0)
        return a;
    var b = a;
    if (b === 0)
        return a;
    return -1;
}