function(object, key) {
    var result = exports.get(object, key);
    exports.del(object, key);
    return result;
}