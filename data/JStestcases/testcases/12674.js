function* h() {
    try {
        yield 42
    } finally {
        yield 43
    }
}