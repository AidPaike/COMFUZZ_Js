function(a, b) {
    (a | 0) + (b | 0); // dead
    return a;
}