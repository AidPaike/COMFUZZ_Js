function(stdlib, foreign, heap) {
    "use asm";

    function func() {
        var a = 1;
        return (((a * 3) | 0) + ((4 * a) | 0)) | 0;
    }
    return {
        caller: func
    };
}