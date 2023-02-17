function(global, env, buffer) {
    "use asm";
    var a = new global.Int8Array(buffer);
    var b = new global.Int16Array(buffer);
    var c = new global.Int32Array(buffer);
    var d = new global.Uint8Array(buffer);
    var e = new global.Uint16Array(buffer);
    var f = new global.Uint32Array(buffer);
    var g = new global.Float32Array(buffer);
    var h = new global.Float64Array(buffer);
    var i = env.STACKTOP | 0;
    var j = env.STACK_MAX | 0;
    var k = env.tempDoublePtr | 0;
    var l = env.ABORT | 0;
    var m = 0;
    var n = 0;
    var o = 0;
    var p = 0;
    var q = +env.NaN,
        r = +env.Infinity;
    var s = 0,
        t = 0,
        u = 0,
        v = 0,
        w = 0.0,
        x = 0,
        y = 0,
        z = 0,
        A = 0.0;
    var B = 0;
    var C = 0;
    var D = 0;
    var E = 0;
    var F = 0;
    var G = 0;
    var H = 0;
    var I = 0;
    var J = 0;
    var K = 0;
    var L = global.Math.floor;
    var M = global.Math.abs;
    var N = global.Math.sqrt;
    var O = global.Math.pow;
    var P = global.Math.cos;
    var Q = global.Math.sin;
    var R = global.Math.tan;
    var S = global.Math.acos;
    var T = global.Math.asin;
    var U = global.Math.atan;
    var V = global.Math.atan2;
    var W = global.Math.exp;
    var X = global.Math.log;
    var Y = global.Math.ceil;
    var Z = global.Math.imul;
    var _ = env.abort;
    var $ = env.assert;
    var aa = env.asmPrintInt;
    var ba = env.asmPrintFloat;
    var ca = env.min;
    var da = env._puts;
    var ea = env._free;
    var fa = env._fputc;
    var ga = env._send;
    var ha = env._pwrite;
    var ia = env._fputs;
    var ja = env.___setErrNo;
    var ka = env._malloc;
    var la = env._mkport;
    var ma = env._emscripten_memcpy_big;
    var na = env._fileno;
    var oa = env._fflush;
    var pa = env._write;
    var qa = 0.0;

    function ra(a) {
        a = a | 0;
        var b = 0;
        b = i;
        i = i + a | 0;
        i = i + 7 & -8;
        return b | 0
    }

    function sa() {
        return i | 0
    }

    function ta(a) {
        a = a | 0;
        i = a
    }

    function ua(a, b) {
        a = a | 0;
        b = b | 0;
        if ((m | 0) == 0) {
            m = a;
            n = b
        }
    }

    function va(b) {
        b = b | 0;
        a[k] = a[b];
        a[k + 1 | 0] = a[b + 1 | 0];
        a[k + 2 | 0] = a[b + 2 | 0];
        a[k + 3 | 0] = a[b + 3 | 0]
    }

    function wa(b) {
        b = b | 0;
        a[k] = a[b];
        a[k + 1 | 0] = a[b + 1 | 0];
        a[k + 2 | 0] = a[b + 2 | 0];
        a[k + 3 | 0] = a[b + 3 | 0];
        a[k + 4 | 0] = a[b + 4 | 0];
        a[k + 5 | 0] = a[b + 5 | 0];
        a[k + 6 | 0] = a[b + 6 | 0];
        a[k + 7 | 0] = a[b + 7 | 0]
    }

    function xa(a) {
        a = a | 0;
        B = a
    }

    function ya(a) {
        a = a | 0;
        C = a
    }

    function za(a) {
        a = a | 0;
        D = a
    }

    function Aa(a) {
        a = a | 0;
        E = a
    }

    function Ba(a) {
        a = a | 0;
        F = a
    }

    function Ca(a) {
        a = a | 0;
        G = a
    }

    function Da(a) {
        a = a | 0;
        H = a
    }

    function Ea(a) {
        a = a | 0;
        I = a
    }

    function Fa(a) {
        a = a | 0;
        J = a
    }

    function Ga(a) {
        a = a | 0;
        K = a
    }

    function Ha(a, b, d) {
        a = a | 0;
        b = b | 0;
        d = d | 0;
        var e = 0,
            f = 0,
            g = 0,
            h = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0,
            r = 0,
            s = 0;
        e = i;
        f = b;
        while (1) {
            b = c[a + (((f + d | 0) / 2 | 0) << 2) >> 2] | 0;
            g = f;
            h = d;
            while (1) {
                j = g;
                while (1) {
                    k = a + (j << 2) | 0;
                    l = c[k >> 2] | 0;
                    m = j + 1 | 0;
                    if ((l | 0) < (b | 0)) {
                        j = m
                    } else {
                        n = h;
                        break
                    }
                }
                while (1) {
                    o = a + (n << 2) | 0;
                    p = c[o >> 2] | 0;
                    q = n + -1 | 0;
                    if ((b | 0) < (p | 0)) {
                        n = q
                    } else {
                        break
                    }
                }
                if ((j | 0) > (n | 0)) {
                    r = j;
                    s = n
                } else {
                    c[k >> 2] = p;
                    c[o >> 2] = l;
                    r = m;
                    s = q
                }
                if ((r | 0) > (s | 0)) {
                    break
                } else {
                    g = r;
                    h = s
                }
            }
            if ((s | 0) > (f | 0)) {
                Ha(a, f, s)
            }
            if ((r | 0) < (d | 0)) {
                f = r
            } else {
                break
            }
        }
        i = e;
        return
    }

    function Ia() {
        var a = 0,
            b = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0;
        a = i;
        b = 0;
        do {
            c[2] = 74755;
            c[4] = 0;
            c[6] = 0;
            d = 0;
            e = 0;
            f = 74755;
            g = 1;
            while (1) {
                h = (f * 1309 | 0) + 13849 & 65535;
                j = ((h >>> 0) % 1e5 | 0) + -5e4 | 0;
                c[32 + (g << 2) >> 2] = j;
                do {
                    if ((j | 0) > (e | 0)) {
                        c[4] = j;
                        k = d;
                        l = j
                    } else {
                        if ((j | 0) >= (d | 0)) {
                            k = d;
                            l = e;
                            break
                        }
                        c[6] = j;
                        k = j;
                        l = e
                    }
                } while (0);
                j = g + 1 | 0;
                if ((j | 0) == 50001) {
                    break
                } else {
                    d = k;
                    e = l;
                    g = j;
                    f = h
                }
            }
            c[2] = h;
            Ha(32, 1, 5e4);
            if ((c[36 >> 2] | 0) == (c[6] | 0)) {
                if ((c[200032 >> 2] | 0) != (c[4] | 0)) {
                    m = 10
                }
            } else {
                m = 10
            }
            if ((m | 0) == 10) {
                m = 0;
                da(200040) | 0
            }
            b = b + 1 | 0;
        } while ((b | 0) != 100);
        i = a;
        return 0
    }

    function Ja() {}

    function Ka(b) {
        b = b | 0;
        var c = 0;
        c = b;
        while (a[c] | 0) {
            c = c + 1 | 0
        }
        return c - b | 0
    }

    function La(b, d, e) {
        b = b | 0;
        d = d | 0;
        e = e | 0;
        var f = 0,
            g = 0,
            h = 0,
            i = 0;
        f = b + e | 0;
        if ((e | 0) >= 20) {
            d = d & 255;
            g = b & 3;
            h = d | d << 8 | d << 16 | d << 24;
            i = f & ~3;
            if (g) {
                g = b + 4 - g | 0;
                while ((b | 0) < (g | 0)) {
                    a[b] = d;
                    b = b + 1 | 0
                }
            }
            while ((b | 0) < (i | 0)) {
                c[b >> 2] = h;
                b = b + 4 | 0
            }
        }
        while ((b | 0) < (f | 0)) {
            a[b] = d;
            b = b + 1 | 0
        }
        return b - e | 0
    }

    function Ma(b, d, e) {
        b = b | 0;
        d = d | 0;
        e = e | 0;
        var f = 0;
        if ((e | 0) >= 4096) return ma(b | 0, d | 0, e | 0) | 0;
        f = b | 0;
        if ((b & 3) == (d & 3)) {
            while (b & 3) {
                if ((e | 0) == 0) return f | 0;
                a[b] = a[d] | 0;
                b = b + 1 | 0;
                d = d + 1 | 0;
                e = e - 1 | 0
            }
            while ((e | 0) >= 4) {
                c[b >> 2] = c[d >> 2];
                b = b + 4 | 0;
                d = d + 4 | 0;
                e = e - 4 | 0
            }
        }
        while ((e | 0) > 0) {
            a[b] = a[d] | 0;
            b = b + 1 | 0;
            d = d + 1 | 0;
            e = e - 1 | 0
        }
        return f | 0
    }
    return {
        _strlen: Ka,
        _memcpy: Ma,
        _main: Ia,
        _memset: La,
        runPostSets: Ja,
        stackAlloc: ra,
        stackSave: sa,
        stackRestore: ta,
        setThrew: ua,
        setTempRet0: xa,
        setTempRet1: ya,
        setTempRet2: za,
        setTempRet3: Aa,
        setTempRet4: Ba,
        setTempRet5: Ca,
        setTempRet6: Da,
        setTempRet7: Ea,
        setTempRet8: Fa,
        setTempRet9: Ga
    }
}