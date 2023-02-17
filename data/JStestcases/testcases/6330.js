function(stdlib, foreign, heap, offset) {
    "use asm";
    var MEM8 = new stdlib.Int8Array(heap, offset);
    var MEM16 = new stdlib.Int16Array(heap, offset);
    var MEM32 = new stdlib.Int32Array(heap, offset);
    var MEMU8 = new stdlib.Uint8Array(heap, offset);
    var MEMU16 = new stdlib.Uint16Array(heap, offset);
    var MEMU32 = new stdlib.Uint32Array(heap, offset);
    var compareExchange = stdlib.Atomics.compareExchange;
    var fround = stdlib.Math.fround;

    function compareExchangei8(i, o, n) {
        i = i | 0;
        o = o | 0;
        n = n | 0;
        return compareExchange(MEM8, i, o, n) | 0;
    }

    function compareExchangei16(i, o, n) {
        i = i | 0;
        o = o | 0;
        n = n | 0;
        return compareExchange(MEM16, i, o, n) | 0;
    }

    function compareExchangei32(i, o, n) {
        i = i | 0;
        o = o | 0;
        n = n | 0;
        return compareExchange(MEM32, i, o, n) | 0;
    }

    function compareExchangeu8(i, o, n) {
        i = i | 0;
        o = o >>> 0;
        n = n >>> 0;
        return compareExchange(MEMU8, i, o, n) >>> 0;
    }

    function compareExchangeu16(i, o, n) {
        i = i | 0;
        o = o >>> 0;
        n = n >>> 0;
        return compareExchange(MEMU16, i, o, n) >>> 0;
    }

    function compareExchangeu32(i, o, n) {
        i = i | 0;
        o = o >>> 0;
        n = n >>> 0;
        return compareExchange(MEMU32, i, o, n) >>> 0;
    }
    return {
        compareExchangei8: compareExchangei8,
        compareExchangei16: compareExchangei16,
        compareExchangei32: compareExchangei32,
        compareExchangeu8: compareExchangeu8,
        compareExchangeu16: compareExchangeu16,
        compareExchangeu32: compareExchangeu32,
    };
}