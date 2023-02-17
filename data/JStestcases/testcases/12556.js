function() {
    "use asm";

    function f0() {
        return 0;
    }

    function f1() {
        return 1;
    }

    function f4() {
        return 4;
    }

    function f64() {
        return 64;
    }

    function f127() {
        return 127;
    }

    function f128() {
        return 128;
    }

    function f256() {
        return 256;
    }

    function f1000() {
        return 1000;
    }

    function f2000000() {
        return 2000000;
    }

    function fmax() {
        return 2147483647;
    }
    return {
        f0: f0,
        f1: f1,
        f4: f4,
        f64: f64,
        f127: f127,
        f128: f128,
        f256: f256,
        f1000: f1000,
        f2000000: f2000000,
        fmax: fmax
    };
}