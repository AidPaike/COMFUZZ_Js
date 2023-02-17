function() {
    "use asm";

    function sum(x, y) {
        x = x | 0;
        y = +y;
        if ((x | 0) > 10) {
            x = 10;
        }
        while ((x | 0) > 0) {
            x = (x - 1) | 0;
            y = +(y + 1.0);
            if ((x | 0) == 0) {
                break;
            }
        }
        return +y;
    }

    function sumWhile(x, y) {
        x = x | 0;
        y = +y;
        if ((x | 0) > 10) {
            x = 10;
        }
        do {
            x = (x - 1) | 0;
            if ((x | 0) > 10) {
                x = 10;
            }
            y = +(y + 1.0);
            if ((x | 0) == 0) {
                break;
            }
        }
        while ((x | 0) > 0);
        return +y;
    }

    function forLoop(x, y) {
        x = x | 0;
        y = y | 0;
        var i = 0;
        if ((x | 0) > 10) {
            x = 10;
        }
        if ((y | 0) <= 0) {
            y = 1;
        }
        for (;
            (i | 0) < (x | 0); i = (i + 1) | 0) {
            y = (y + 1) | 0;
        }
        for (i = 0;
            (i | 0) < (x | 0); i = (i + 1) | 0) {
            y = (y + 2) | 0;
        }
        for (;;) {
            y = y << 1;
            if ((y | 0) > (1 << 20)) {
                break;
            }
        }
        return y | 0;
    }
    return {
        f1: sum,
        f2: sumWhile,
        f3: forLoop,
    };
}