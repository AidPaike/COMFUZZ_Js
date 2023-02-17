function(a, b) {
    return 0 === Array.prototype.lastIndexOf.call(arguments, arguments[0]) &&
        1 === Array.prototype.lastIndexOf.call(arguments, arguments[1]) &&
        -1 === Array.prototype.lastIndexOf.call(arguments, arguments[2]);
}