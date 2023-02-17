function(stdlib, foreign, heap) {
    "use asm";

    function f0(i) {
        i = i | 0;
        return (i | 0) % 2 | 0;
    }

    function f1(i) {
        i = i | 0;
        return (i | 0) % 3 | 0;
    }

    function f2(i) {
        i = i | 0;
        return (i | 0) % 9 | 0;
    }

    function f3(i) {
        i = i | 0;
        return (i | 0) % 1024 | 0;
    }

    function f4(i) {
        i = i | 0;
        return (i | 0) % 3333339 | 0;
    }
    return {
        f0: f0,
        f1: f1,
        f2: f2,
        f3: f3,
        f4: f4
    };
}