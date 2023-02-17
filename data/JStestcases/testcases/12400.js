function(stdlib, foreign, heap) {
    'use asm';

    function f(i0) {
        i0 = i0 | 0;
        return !i0;
    }
    return f;
}