function() {
    return {
        valueOf: function() {
            throw new TypeError();
        }
    };
}