function(i, x, w, j, c, n) {
    var this_array = this.array;
    var w_array = w.array;
    var xl = x & 0x1fff,
        xh = x >> 13;
    while (--n >= 0) {
        var l = this_array[i] & 0x1fff;
        var h = this_array[i++] >> 13;
        var m = xh * l + h * xl;
        l = xl * l + ((m & 0x1fff) << 13) + w_array[j] + c;
        c = (l >> 26) + (m >> 13) + xh * h;
        w_array[j++] = l & 0x3ffffff;
    }
    return c;
}