function(stdlib, foreign, heap) {
    "use asm";
    var HEAP32 = new stdlib.Int32Array(heap);

    function func() {
        var a = 1;
        var b = 2;
        HEAP32[0] = a + b;
        return HEAP32[0] | 0;
    }
    return {
        caller: func
    };
}