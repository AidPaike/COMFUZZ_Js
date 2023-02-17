function() {
    "use asm";

    function k1() {
        return +(1.0e-25 + 3.0e-25 + 5.0e-25 + 6.0e-25 + 9.0e-25);
    }

    function k2() {
        return +(1.0e-20 + 3.0e-20 + 5.0e-20 + 6.0e-20 + 9.0e-20);
    }

    function k3() {
        return +(1.0e-15 + 3.0e-15 + 5.0e-15 + 6.0e-15 + 9.0e-15);
    }

    function k4() {
        return +(1.0e-10 + 3.0e-10 + 5.0e-10 + 6.0e-10 + 9.0e-10);
    }

    function k5() {
        return +(1.0e-5 + 3.0e-5 + 5.0e-5 + 6.0e-5 + 9.0e-5);
    }

    function k6() {
        return +(1.1e+0 + 3.1e+0 + 5.1e+0 + 6.1e+0 + 9.1e+0);
    }
    return {
        k1: k1,
        k2: k2,
        k3: k3,
        k4: k4,
        k5: k5,
        k6: k6
    };
}