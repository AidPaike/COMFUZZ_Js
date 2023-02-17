function(x) {
    function F2(y) {
        var z = x + y; {
            var w = 5;
            var v = "Capybara";
            var F3 = function(a, b) {
                function F4(p) {
                    debugger;
                    return p + a + b + z + w + v.length;
                }
                return F4;
            }
            return F3(4, 5);
        }
    }
    return F2(17);
}