function(reason) {
    return {
        get then() {
            throw reason;
        }
    };
}