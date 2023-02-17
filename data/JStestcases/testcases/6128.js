function() {
    "use asm";

    function w0(f) {
        while (1) f();
        return 108;
    }

    function w1(f) {
        if (1)
            while (1) f();
        return 109;
    }

    function w2(f) {
        if (1)
            while (1) f();
        else
            while (1) f();
        return 110;
    }

    function w3(f) {
        if (0)
            while (1) f();
        return 111;
    }
    return {
        w0: w0,
        w1: w1,
        w2: w2,
        w3: w3
    };
}