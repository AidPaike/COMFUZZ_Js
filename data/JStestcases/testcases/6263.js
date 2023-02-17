function(callback) {
    try {
        [1, 2].map(callback);
    } catch (e) {
        return e;
    }
    return "FAILED";
}