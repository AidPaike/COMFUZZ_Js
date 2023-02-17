function() {
    "use asm";

    function __f_20() {
        var __v_39 = 0;
        abc: {
            __v_39 = 10;
            if (__v_39 == 10) {
                break abc;
            }
            __v_39 = 20;
        }
        return __v_39 | 0;
    }
    return {
        __f_20: __f_20
    };
}