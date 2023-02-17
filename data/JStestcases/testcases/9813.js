function() {
    "".indexOf({
        valueOf: function() {
            return Symbol("1");
        },
        toString: null
    });
}