function(stdlib, foreign, heap) {
    "use asm"
    var a = new stdlib.Int8Array(heap);

    function f() {
        return a[0] | 0;
    }
    return {
        f: f
    };
}