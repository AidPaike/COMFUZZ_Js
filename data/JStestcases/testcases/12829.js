function(a, b) {
    var ah = a >>> 16;
    var al = a & 0xffff;
    var bh = b >>> 16;
    var bl = b & 0xffff;
    return (al * bl + ((ah * bl + al * bh) << 16)) | 0;
}