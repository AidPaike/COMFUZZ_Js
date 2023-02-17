function(a, b) {
    var ah = a >>> 16 & 0xffff;
    var al = a & 0xffff;
    var bh = b >>> 16 & 0xffff;
    var bl = b & 0xffff;
    return al * bl + (ah * bl + al * bh << 16 >>> 0) | 0;
}