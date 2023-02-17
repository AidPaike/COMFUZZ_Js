function(stdlib) {
    "use asm";
    var fround = stdlib.Math.fround;

    function f(a) {
        a = +a;
        return fround(a);
    }
    return {
        f: f
    };
}