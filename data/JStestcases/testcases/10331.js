function(actual, expected, msg) {
    ((actual === expected ? "Passed! " : "Failed (actual: " + actual + ", expected: " + expected + "). Message: ") + msg).echo();
}