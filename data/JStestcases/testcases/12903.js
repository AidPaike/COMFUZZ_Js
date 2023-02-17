function() {
    var arrObj0 = {};
    arrObj0[0] = 1;

    function v16037() {
        for (var _strvar0 in arrObj0) {
            var v16039 = {
                v16041: function() {
                    return function bar() {
                        this.method0.apply(this, arguments);
                    }
                }
            };
            var v16042 = arrObj0;
            v16042.v16043 = v16039.v16041();
            v16042.v16046 = v16039.v16041();
            v16042.v16046.prototype = {
                method0: function() {
                    this.v16052 = new v16042.v16043();
                }
            };
            var v16067 = new v16042.v16046(0, 0);
        }
    }
    try {
        v16037();
    } catch (e) {}
}