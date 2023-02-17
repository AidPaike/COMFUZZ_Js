function(stdlib, foreign, heap, offset) {
    "use asm";
    var MEM8 = new stdlib.Int8Array(heap, offset);
    var MEM16 = new stdlib.Int16Array(heap, offset);
    var MEM32 = new stdlib.Int32Array(heap, offset);
    var MEMU8 = new stdlib.Uint8Array(heap, offset);
    var MEMU16 = new stdlib.Uint16Array(heap, offset);
    var MEMU32 = new stdlib.Uint32Array(heap, offset);
    var or = stdlib.Atomics.or;
    var fround = stdlib.Math.fround;

    function ori8(i, x) {
        i = i | 0;
        x = x | 0;
        return or(MEM8, i, x) | 0;
    }

    function ori16(i, x) {
        i = i | 0;
        x = x | 0;
        return or(MEM16, i, x) | 0;
    }

    function ori32(i, x) {
        i = i | 0;
        x = x | 0;
        return or(MEM32, i, x) | 0;
    }

    function oru8(i, x) {
        i = i | 0;
        x = x >>> 0;
        return or(MEMU8, i, x) >>> 0;
    }

    function oru16(i, x) {
        i = i | 0;
        x = x >>> 0;
        return or(MEMU16, i, x) >>> 0;
    }

    function oru32(i, x) {
        i = i | 0;
        x = x >>> 0;
        return or(MEMU32, i, x) >>> 0;
    }
    return {
        ori8: ori8,
        ori16: ori16,
        ori32: ori32,
        oru8: oru8,
        oru16: oru16,
        oru32: oru32,
    };
}