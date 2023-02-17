function(object) {
    var string = Object.prototype.toString.call(object);
    return string.substring(8, string.length - 1);
}