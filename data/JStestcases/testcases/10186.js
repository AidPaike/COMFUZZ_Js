function() {
    "use asm";

    function caller() {
        var x = 5;
        var y = 0;
        var ret = 0;
        outer: while ((x | 0) > 0) {
            x = (x - 1) | 0;
            y = 0;
            while ((y | 0) < 5) {
                if ((x | 0) == 3) {
                    continue outer;
                }
                ret = (ret + 1) | 0;
                y = (y + 1) | 0;
            }
        }
        return ret | 0;
    }
    return {
        caller: caller
    };
}