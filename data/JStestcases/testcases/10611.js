function() {
    "".indexOf("", {
        valueOf: function() {
            return Object(1);
        },
        toString: function() {
            return Object(1);
        }
    });
}