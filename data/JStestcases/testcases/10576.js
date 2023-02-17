function*() {
    try {
        return 42
    } finally {
        yield 43
    }
}