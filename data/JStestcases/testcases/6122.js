function(s, radix) {
    if (!radix) return +s;
    return parseInt(s, radix);
}