function(expected, actual) {
    if (typeof expected != typeof actual)
        return false;
    if (typeof expected != 'number')
        return actual == expected;
    if (actual != actual)
        return expected != expected
    if (expected != expected)
        return false;
    if (actual != expected)
        return Math.abs(actual - expected) <= 1E-10;
    if (actual == 0)
        return (1 / actual > 0) == (1 / expected > 0);
    return true;
}