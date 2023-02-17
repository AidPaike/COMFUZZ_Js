function(stdlib, foreign, buffer) {
    "use asm";

    function f(i) {
        i = i | 0;
        var j = 0;
        do {
            if ((i | 0) > 0) {
                j = (i | 0) != 0;
                i = (i - 1) | 0;
            } else {
                j = 0;
            }
        } while (j);
        return i | 0;
    }
    return {
        f: f
    };
}