function(stdlib, foreign, buffer) {
    "use asm";
    var x = foreign.x | 0,
        y = foreign.y | 0;

    function test() {
        return (x + y) | 0;
    }
    return {
        caller: test
    };
}