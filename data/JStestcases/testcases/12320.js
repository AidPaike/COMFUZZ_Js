function() {
    return {
        next: function() {
            return {
                done: false,
                value: null
            };
        },
        get return() {
            throw {
                name: 'inner error'
            };
        },
    };
}