function(str, delim, pos) {
    var newstr = '';
    var length = str.length;
    if (str.indexOf(' ') != -1) {
        return str;
    }
    for (var i = 0; i < length; i += pos) {
        newstr += str.substr(i, pos) + delim;
    }
    return newstr;
}