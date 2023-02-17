function() {
    var o = {};
    for (var k in o) {}
    for (var k in o) k;
    for (var k in {
            a: 1
        }) {}
    for (var k in {
            a: 1
        }) k;
}