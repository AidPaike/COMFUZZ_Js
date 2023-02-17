function() {
    "use asm";

    function w0(a) {
        a = a | 0;
        if (a)
            while (1);
        return 42;
    }

    function w1(a) {
        a = a | 0;
        while (1) return 42;
        return 106;
    }

    function d0(a) {
        a = a | 0;
        if (a)
            do; while (1);
        return 42;
    }

    function d1(a) {
        a = a | 0;
        do return 42; while (1);
        return 107;
    }

    function f0(a) {
        a = a | 0;
        if (a)
            for (;;);
        return 42;
    }

    function f1(a) {
        a = a | 0;
        for (;;) return 42;
        return 108;
    }
    return {
        w0: w0,
        w1: w1,
        d0: d0,
        d1: d1,
        f0: f0,
        f1: f1
    };
}