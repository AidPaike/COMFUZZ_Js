function(stdlib) {
    "use asm";
    var fround = stdlib.Math.fround;

    function caller() {
        var foo = fround(55);
        return +foo;
    }
    return {
        caller: caller
    };
}