function(n) {
    n = Number(n);
    var sign = (n < 0) ? -1 : 1;
    if (Math.abs(n) == 0 ||
        Math.abs(n) == Number.POSITIVE_INFINITY ||
        n != n) {
        return 0;
    }
    n = sign * Math.floor(Math.abs(n))
    n = n % Math.pow(2, 32);
    if (n < 0) {
        n += Math.pow(2, 32);
    }
    return (n);
}