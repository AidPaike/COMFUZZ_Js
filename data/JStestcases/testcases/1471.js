function() {
    "use asm";
    let a = [1];
    for (let i = 0; i < 2; i++) { // JIT
        a[0] = 1;
        if (i > 0) {
            a[0] = {}; // the array type changed, bailout!!
        }
    }

    function f(v) {
        v = v | 0;
        return v | 0;
    }
    return f;
}