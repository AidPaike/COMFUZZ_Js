function(a, b) {
    const l = a & 0x3ffffff;
    const h = b & 0x3ffffff;
    const m = l * h;
    const rl = m & 0x3ffffff;
    const rh = (m / 0x4000000) >>> 0;
    return rl | rh;
}