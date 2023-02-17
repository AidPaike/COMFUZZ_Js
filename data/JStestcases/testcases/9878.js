function() {
    return {
        next: function() {
            return {
                done: false
            };
        },
        throw: function() {
            return 23;
        }
    };
}