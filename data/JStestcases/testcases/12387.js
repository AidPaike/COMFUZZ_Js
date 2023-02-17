function() {
    "use asm";

    function func() {
        var x = 3;
        var y = 2;
        return (x & y) | 0;
    }
    return {
        caller: func
    };
}