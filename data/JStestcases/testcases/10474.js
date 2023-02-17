function(stdlib) {
    "use asm";
    var m1 = stdlib.Math.fround;

    function f1() {
        var x = m1(1.5);
        var y = 1;
        y = ~~~x
        return y | 0
    }
    return f1;
}