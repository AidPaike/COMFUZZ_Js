function(a, b, stack) {
    return exports.isArrayLike(b) &&
        a.length == b.length &&
        exports.zip(a, b).every(exports.apply(function(a, b) {
            return exports.eq(a, b, stack);
        }));
}