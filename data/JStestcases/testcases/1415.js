function(ret) {
    ret.set = function(i, func) {
        this[i] = func;
    };
    ret.get = function(i) {
        return this[i];
    };
    return ret;
}