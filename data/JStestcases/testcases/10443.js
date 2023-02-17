function() {
    var o = {};
    for (var i = 0; i < 100; i++) {
        var k = "key" + i;
        o[k] = "foo";
        delete o[k];
    }
}