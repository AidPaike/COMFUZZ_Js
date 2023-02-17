function(str, len) {
    var pad = len - str.length;
    for (var i = 0; i < pad; i++) {
        str = "0" + str;
    }
    return str;
}