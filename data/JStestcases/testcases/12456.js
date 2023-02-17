function(a) {
    Array.prototype.push.call(arguments, a);
    return arguments[0];
}