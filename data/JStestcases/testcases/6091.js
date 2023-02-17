function(stdlib) {
    'use asm';
    var Stdlib = stdlib.Math.NAME;
    var fround = stdlib.Math.fround;

    function NAME(a) {
        a = fround(a);
        return fround(Stdlib(a));
    }
    return {
        NAME: NAME
    };
}