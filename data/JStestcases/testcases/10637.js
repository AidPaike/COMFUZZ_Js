function(cons, seed, iterable) {
    var visited = []
    for (let x of iterable) {
        for (let y of x) {
            seed = cons(y, seed);
        }
    }
    return seed;
}