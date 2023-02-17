function() {
    function f(mode, iterations) {
        var accumulator = 0;
        if (mode == 1) {
            while (--iterations > 0) accumulator = Math.ceil(accumulator);
            return 1;
        } else {
            while (--iterations > 0) accumulator = Math.floor(accumulator);
            return 2;
        }
    }
    return f;
}