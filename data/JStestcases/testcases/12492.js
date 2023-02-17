function(stdlib, foreign, buffer) {
    "use asm";
    var HEAP8 = new stdlib.Uint8Array(buffer);

    function load(a) {
        a = a | 0;
        return HEAP8[a >> 0] | 0;
    }
    return {
        load: load
    };
}