function() {
    'use asm';
    const a = 1.0;

    function f() {
        var b = a;
        var a = 0;
    }
    return f;
}