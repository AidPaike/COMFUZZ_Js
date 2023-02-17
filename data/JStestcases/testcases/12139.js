function(callback) {
    try {
        "1,2".replace('1', callback);
    } catch (e) {
        return e;
    }
    return "FAILED";
}