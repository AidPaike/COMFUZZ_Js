function(a, b, c) {
    var i = a ? (b >>> 0) : (c >>> 0);
    return (i | 0);
}