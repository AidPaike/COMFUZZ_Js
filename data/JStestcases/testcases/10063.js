function(foo, checkForName) {
    var properties = Object.getOwnPropertyNames(foo);
    var len = properties.length;
    var check = 0;
    for (var i = 0; i < len; i++) {
        var prop = properties[i].toString();
        if (prop == "prototype" || (checkForName && prop == "name") ||
            prop == "arguments" || prop == "caller" || prop == "length") {
            check++;
        }
        if (!checkForName && prop == "name") {
            return false;
        }
    }
    return check == len;
}