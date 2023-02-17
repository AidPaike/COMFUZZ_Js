function() {
    "use asm";

    function func() {
        var x = 1;
        var y = 2;
        var z = 0;
        z = x + y & -1;
        return z | 0;
    }
    return {
        caller: func
    };
}