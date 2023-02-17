function(stdlib, foreign, buffer) {
    "use asm";
    var i1 = 0,
        d1 = 0.0,
        i2 = -5;
    var fi1 = foreign.i1 | 0;
    var fi2 = foreign.i2 | 0;
    var fd1 = +foreign.d1;
    var fd2 = +foreign.d2;
    var fun1 = foreign.fun1;
    var fun2 = foreign.fun2;
    var fround = stdlib.Math.fround;
    var sInf = stdlib.Infinity,
        sNaN = stdlib.NaN;
    var m1 = stdlib.Math.acos;
    var m2 = stdlib.Math.asin;
    var m3 = stdlib.Math.atan;
    var m4 = stdlib.Math.cos;
    var m5 = stdlib.Math.sin;
    var m6 = stdlib.Math.tan;
    var m7 = stdlib.Math.ceil;
    var m8 = stdlib.Math.floor;
    var m9 = stdlib.Math.exp;
    var m10 = stdlib.Math.log;
    var m11 = stdlib.Math.sqrt;
    var m12 = stdlib.Math.abs;
    var m13 = stdlib.Math.atan2;
    var m34 = stdlib.Math.pow;
    var m14 = stdlib.Math.imul;
    var m15 = stdlib.Math.E;
    var m16 = stdlib.Math.LN10;
    var m17 = stdlib.Math.LN2;
    var m18 = stdlib.Math.LOG2E;
    var m19 = stdlib.Math.LOG10E;
    var m20 = stdlib.Math.PI;
    var m21 = stdlib.Math.SQRT1_2;
    var m22 = stdlib.Math.SQRT2;
    var HEAP8 = new stdlib.Int8Array(buffer);
    var HEAP16 = new stdlib.Int16Array(buffer);
    var HEAP32 = new stdlib.Int32Array(buffer);
    var HEAPU8 = new stdlib.Uint8Array(buffer);
    var HEAPU16 = new stdlib.Uint16Array(buffer);
    var HEAPU32 = new stdlib.Uint32Array(buffer);
    var HEAPF32 = new stdlib.Float32Array(buffer);
    var HEAP64 = new stdlib.Float64Array(buffer);

    function read8(x) {
        x = x | 0;
        return HEAP8[x] | 0;
    }

    function read16(x) {
        x = x | 0;
        return HEAP16[x >> 1] | 0;
    }

    function read32(x) {
        x = x | 0;
        return HEAP32[x >> 2] | 0;
    }

    function readU8(x) {
        x = x | 0;
        return +((HEAPU8[x]) >>> 0);
    }

    function readU16(x) {
        x = x | 0;
        return +((HEAPU16[x >> 1]) >>> 0);
    }

    function readU32(x) {
        x = x | 0;
        return +((HEAPU32[x >> 2]) >>> 0);
    }

    function readF32(x) {
        x = x | 0;
        return +HEAPF32[x >> 2];
    }

    function readF32f(x) {
        x = x | 0;
        return fround(HEAPF32[x >> 2]);
    }

    function read64(x) {
        x = x | 0;
        return +HEAP64[x >> 3];
    }
    return {
        read8: read8,
        read16: read16,
        read32: read32,
        readU8: readU8,
        readU16: readU16,
        readU32: readU32,
        readF32: readF32,
        readF32f: readF32f,
        read64: read64
    };
}