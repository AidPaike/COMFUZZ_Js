function(stdlib, foreign, buffer) {
    "use asm";
    var m = new stdlib.Int32Array(buffer);

    function caller() {
        var i = 4;
        m[0] = (i + 1) | 0;
        m[i >> 2] = ((m[0] | 0) + 1) | 0;
        m[2] = ((m[i >> 2] | 0) + 1) | 0;
        return m[2] | 0;
    }
    return {
        caller: caller
    };
}