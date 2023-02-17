function(node) {
    if (this.state.decorators.length) {
        node.decorators = this.state.decorators;
        this.state.decorators = [];
    }
}