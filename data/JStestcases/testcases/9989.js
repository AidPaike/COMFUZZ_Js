function(stdlib, foreign) {
    'use asm';
    var sym = foreign.sym;

    function callSym(i) {
        i = i | 0;
        return sym(i | 0) | 0;
    }
    return callSym;
}