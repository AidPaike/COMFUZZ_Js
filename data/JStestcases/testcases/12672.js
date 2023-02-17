function(stdlib, foreign, buffer) {
    "use asm";
    var HEAP16 = new stdlib.Uint16Array(buffer);

    function load(a) {
        a = a | 0;
        return HEAP16[a >> 1] | 0;
    }
    return {
        load: load
    };
}