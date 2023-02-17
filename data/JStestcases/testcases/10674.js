function(state) {
    return this.left.evaluate(state) < this.right.evaluate(state);
}