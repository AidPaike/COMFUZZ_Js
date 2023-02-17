function(x) {
    if ((x & 1) == null) return true;
    if ((x | 3) === null) return true;
    return false;
}