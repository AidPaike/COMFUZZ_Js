function(object) {
    var copy = {};
    exports.object.keys(object).forEach(function(key) {
        copy[key] = object[key];
    });
    return copy;
}