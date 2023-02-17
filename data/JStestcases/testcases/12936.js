function* g23() {
    return (yield(1 + (yield 2) + 3)) + (yield(4 + (yield 5) + 6));
}