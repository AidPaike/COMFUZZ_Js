function() {
    var x = {
        y: 0
    };
    g.escape();

    function g() {
        return eval('x.y');
    }
}