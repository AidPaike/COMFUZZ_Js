function(width) {
    var res = 0;
    if (typeof(width) == "string" && width != null && width != "") {
        var p = width.indexOf("px");
        if (p >= 0) {
            res = parseInt(width.substring(0, p));
        } else {
            res = 1;
        }
    }
    return res;
}