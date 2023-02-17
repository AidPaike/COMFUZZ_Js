function(stdlib, foreign, buffer) {
    "use asm";
    var bb = foreign.a;

    function f1() {
        bb(-2147483648);
        return;
    }
    return {
        f1: f1
    };
}