function(a, b) {
    if (a == b)
        return 0;
    if (a < b)
        return -1;
    if (a > b)
        return 1;
    if (a == a)
        return 1;
    return -1;
}