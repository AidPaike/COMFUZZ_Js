function() {
    "use asm";

    function caller() {
        var a = 5.25;
        var b = 2.5;
        if (a % b == 0.25) {
            return 28;
        }
        return 0;
    }
    return {
        caller: caller
    };
}