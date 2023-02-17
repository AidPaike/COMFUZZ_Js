function(x) {
    var a = x ? true : {
        valueOf: function() {
            return 2;
        }
    };
    return a | 0;
}