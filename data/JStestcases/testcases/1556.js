function(stdlib, env, heap) {
    "use asm";
    var array = new stdlib.Int32Array(heap);
    return function() {
        array[0] = 0x41424344;
        array[1] = 0x45464748;
    }
}