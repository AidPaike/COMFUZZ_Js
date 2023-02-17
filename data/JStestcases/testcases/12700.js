function() {
    "use asm";

    function f(a) {
        a = a | 0;
        while (1) return 1;
        return 0;
    }
    return {
        f: f
    };
}