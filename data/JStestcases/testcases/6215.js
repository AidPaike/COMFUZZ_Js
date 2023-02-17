function(object) {
    var keys = [];
    for (var k in object) {
        keys.push(k);
    }
    return keys;
}