function(object) {
    var copy = {};
    exports.object.keys(object).forEach(function(key) {
        copy[key] = exports.deepCopy(object[key]);
    });
    return copy;
}