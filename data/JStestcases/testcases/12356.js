function(invisible_parameter) {
    var invisible1 = 1;
    var visible1 = 10;
    return (function F2() {
        var invisible2 = 2;
        return (function F3() {
            var visible2 = 20;
            return (function() {
                debugger;
                return visible1 + visible2;
            });
        })();
    })();
}