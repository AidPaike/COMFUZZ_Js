function(v) {
    if (v instanceof Array) {
        var newArray = new Array(v.length);
        for (var i in v) {
            newArray[i] = v[i];
        }
        return newArray;
    }
    return v;
}