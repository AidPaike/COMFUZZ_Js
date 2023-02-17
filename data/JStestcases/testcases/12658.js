function* gen(x) {
    yield ['a', x];
    yield {
        0: 'b',
        1: x + 10
    };
}