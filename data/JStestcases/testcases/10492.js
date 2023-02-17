function(p1, p2) {
    var p3 = p1 + p2;
    return (function() {
        var p4 = 20;
        var p5 = 21;
        var p6 = 22;
        return eval("(function(p7){ debugger; return p1 + p4 + p6 + p7})");
    })();
}