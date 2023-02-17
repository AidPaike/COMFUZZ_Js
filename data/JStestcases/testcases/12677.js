function(length) {
    var a = new Array(length);
    for (var i = 0; i < length; i++) {
        a[i] = '' + i;
    }
    return Object.freeze(a);
}