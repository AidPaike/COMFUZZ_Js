function*() {
    try {
        yield 42
    } finally {
        yield 43;
        return 13
    }
}