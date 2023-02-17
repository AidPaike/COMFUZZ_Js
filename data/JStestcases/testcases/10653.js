function() {
    "use asm";

    function caller() {
        var x = 0;
        while ((x | 0) < 10) {
            x = (x + 6) | 0;
            return x | 0;
        }
        return x | 0;
    }
    return {
        caller: caller
    };
}