function() {
    try {
        var f = new Error("Test Error", "Test Location", 123);
        throw f;
    } catch (e) {
        throw e;
    }
}