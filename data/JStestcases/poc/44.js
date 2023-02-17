function(stdlib, foreign, buffer) {
    "use asm";
    var fl = new stdlib.Uint32Array(buffer);

    function f1(x) {
        x = x | 0;
        fl[0] = x;
        fl[0x10000] = x;
        fl[0x100000] = x;
    }
    return f1;
}