function() {
    return (function dontInline(...rest) {
        return rest;
    })(1);
}