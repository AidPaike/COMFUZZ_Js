function(state) {
    return Math.pow(this.left.evaluate(state), this.right.evaluate(state));
}