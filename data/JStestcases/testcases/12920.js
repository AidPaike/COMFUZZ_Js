function(stdlib) {
    "use asm";
    var fround = stdlib.Math.fround;
    var foo = fround(55);

    function caller() {
        return +foo;
    }
    return {
        caller: caller
    };
}