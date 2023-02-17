function() {
    var arr0 = Array(1, 2);
    Array.prototype[7] = 0;
    var ret = (7 in arr0);
    delete Array.prototype[7];
    return ret;
}