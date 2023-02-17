function* g() {
    try {
        throw "a"; // Ordinary throw. Exception a
    } catch (e) {}
    try {
        yield 1; // Caught internally. Exception b
    } catch (e) {}
    yield 2;
    yield 3; // Caught externally. Exception c
    yield 4;
}