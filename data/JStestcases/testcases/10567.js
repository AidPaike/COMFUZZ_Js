function(fun) {
    if (typeof fun != "function") throw new TypeError();
    var len = this.length;
    var res = new Array(len);
    var thisp = arguments[1];
    for (var i = 0; i < len; i++) {
        if (i in this) res[i] = fun.call(thisp, this[i], i, this);
    }
    return res;
}