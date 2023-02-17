function(count, keyOffset, keyGen) {
    if (keyOffset === undefined) keyOffset = 0;
    if (keyGen === undefined) keyGen = (i) => {
        return "key" + i
    };
    var o = {};
    for (var i = 0; i < count; i++) {
        var key = keyGen(i + keyOffset);
        o[key] = "value";
    }
    return o
}