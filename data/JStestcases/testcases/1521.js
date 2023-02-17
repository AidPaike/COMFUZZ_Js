function() {
    try {
        throw "";
    } catch (e) {
        return arguments.callee;
    }
}