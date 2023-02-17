function* g22() {
    yield(1 + (yield 2) + 3);
    yield(4 + (yield 5) + 6);
}