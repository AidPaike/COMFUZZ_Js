function() {
    return ({
        x: 42,
        g: function*(a) {
            yield this.x
        }
    }).g(0);
}