function(dividend, divisor) {
    if (isNaN(dividend) || isNaN(divisor) || divisor == 0) {
        return NaN;
    }
    var sign = 1;
    if (dividend < 0) {
        dividend = -dividend;
        sign = -1;
    }
    if (dividend == Infinity) {
        return NaN;
    }
    if (divisor < 0) {
        divisor = -divisor;
    }
    if (divisor == Infinity) {
        return sign * dividend;
    }

    function rec_mod(a, b) {
        if (a >= b) {
            a = rec_mod(a, 2 * b);
            if (a >= b) {
                a -= b;
            }
        }
        return a;
    }
    return sign * rec_mod(dividend, divisor);
}