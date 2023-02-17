function(n) {
    var k = 0x3fffffff;
    k <<= 1;
    if (n === 1)
        --k;
    var a = k;
    while (n-- !== 0)
        ++a;
    return a;
}