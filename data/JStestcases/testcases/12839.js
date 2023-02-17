function(stdlib, foreign, heap, offset) {
    "use asm";
    var MEM8 = new stdlib.Int8Array(heap, offset);
    var MEM16 = new stdlib.Int16Array(heap, offset);
    var MEM32 = new stdlib.Int32Array(heap, offset);
    var MEMU8 = new stdlib.Uint8Array(heap, offset);
    var MEMU16 = new stdlib.Uint16Array(heap, offset);
    var MEMU32 = new stdlib.Uint32Array(heap, offset);
    var xor = stdlib.Atomics.xor;
    var fround = stdlib.Math.fround;

    function xori8(i, x) {
        i = i | 0;
        x = x | 0;
        return xor(MEM8, i, x) | 0;
    }

    function xori16(i, x) {
        i = i | 0;
        x = x | 0;
        return xor(MEM16, i, x) | 0;
    }

    function xori32(i, x) {
        i = i | 0;
        x = x | 0;
        return xor(MEM32, i, x) | 0;
    }

    function xoru8(i, x) {
        i = i | 0;
        x = x >>> 0;
        return xor(MEMU8, i, x) >>> 0;
    }

    function xoru16(i, x) {
        i = i | 0;
        x = x >>> 0;
        return xor(MEMU16, i, x) >>> 0;
    }

    function xoru32(i, x) {
        i = i | 0;
        x = x >>> 0;
        return xor(MEMU32, i, x) >>> 0;
    }
    return {
        xori8: xori8,
        xori16: xori16,
        xori32: xori32,
        xoru8: xoru8,
        xoru16: xoru16,
        xoru32: xoru32,
    };
}