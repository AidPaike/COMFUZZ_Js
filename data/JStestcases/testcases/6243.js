function() {
    var loopCount = 0;
    var func2 = function() {
        var a = 1.1;
        for (var i = 0; a && i < 2; ++i) {
            loopCount++;
            a *= undefined;
        }
    };
    for (let i = 0; i < 2; i++) {
        func2();
    }
    return loopCount === 2;
}