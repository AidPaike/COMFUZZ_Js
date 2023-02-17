function(a, n, r) {
    var r_array = r.array;
    var a_array = a.array;
    --n;
    var i = r.t = this.t + a.t - n;
    r.s = 0; // assumes a,this >= 0
    while (--i >= 0) r_array[i] = 0;
    for (i = Math.max(n - this.t, 0); i < a.t; ++i)
        r_array[this.t + i - n] = this.am(n - i, a_array[i], r, 0, 0, this.t + i - n);
    r.clamp();
    r.drShiftTo(1, r);
}