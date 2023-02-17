function() {
    function* g() {
        yield this.x;
        yield this.y;
    }
    var o = {
        start: g,
        x: 1,
        y: 2
    };
    return o.start();
}