function(x, y) {
    try { // Prevent inlining.
        return [x, y];
    } catch (e) {}
}