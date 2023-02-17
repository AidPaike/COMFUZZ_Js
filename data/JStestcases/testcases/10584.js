function(stdlib, foreign, heap) {
    "use asm";
    var MEM = new stdlib.Int8Array(heap);

    function foo(i) {
        i = i | 0;
        i[0] = i;
        return MEM[i + 1 >> 0] | 0;
    }
    return {
        foo: foo
    };
}