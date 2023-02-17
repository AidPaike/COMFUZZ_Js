function(__v_11, foreign, heap) {
    "use asm";
    var __v_12 = new __v_11.Float32Array(heap);
    var __v_14 = __v_11.Math.fround;

    function __f_20() {
        var __v_21 = 1.23;
        __v_12[0] = __v_21;
        return +__v_12[0];
    }
    return {
        __f_14: __f_20
    };
}