function() {
    var result = -1;
    try {
        result = 100;
        throw "hello";
    } catch (e) {}
    return result;
}