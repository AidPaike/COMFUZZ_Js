function(val, idx, obj) {
    return ('[object Math]' !== Object.prototype.toString.call(obj));
}