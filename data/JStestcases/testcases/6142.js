function() {
    var o = {
        toString: function() {
            return this
        }
    };
    [].join(o);
}