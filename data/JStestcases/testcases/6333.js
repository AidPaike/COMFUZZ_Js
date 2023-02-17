function() {
    "use asm"

    function f(a) {
        var b = 0;
        b = (a + 23) | 0;
        return b | 0;
    }
    return {
        f: f
    };
}