function() {
    return {
        next: function() {
            return {
                value: [],
                done: false
            };
        },
        return: function() {
            throw new TypeError('ignore');
        }
    };
}