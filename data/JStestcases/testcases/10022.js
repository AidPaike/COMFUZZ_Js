function() {
    var result;
    try {
        throw 42;
    } catch (e) {
        result = eval("e");
    }
    return result;
}