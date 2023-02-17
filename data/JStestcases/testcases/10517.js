function() {
    "use asm"

    function caller() {
        var ret = 0;
        var i = 0;
        for (i = 2;
            (i | 0) <= 10; i = (i + 1) | 0) {
            ret = (ret + i) | 0;
        }
        return ret | 0;
    }
    return {
        caller: caller
    };
}