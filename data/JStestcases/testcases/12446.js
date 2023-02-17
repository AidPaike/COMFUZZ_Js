function(a, b) {
    const l = a & 0x3ffffff;
    const h = b & 0x3ffffff;
    const m = l * h;
    return (m / 0x10) >>> 0;
}