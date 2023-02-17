function() {
    var r = 1;
    this.f = function() {
        var fr = r;
        this.g = function(flag) {
            var gr;
            if (flag) {
                gr = r;
            } else {
                gr = r;
            }
            return gr + r + fr;
        };
    };
    this.f();
    return this.g(true);
}