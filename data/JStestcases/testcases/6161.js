function* foo() {
    yield;
    new Set();
    for (let x of []) {
        for (let y of []) {
            yield;
        }
    }
}