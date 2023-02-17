function() {
    var chars = [];
    var that = String(this);
    for (var i = 0; i < that.length;) {
        var cp = that.codePointAt(i);
        chars.push(cp.toHex());
        i += cp > 0x10000 ? 2 : 1;
    }
    return chars;
}