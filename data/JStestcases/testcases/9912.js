function() {
    if (!this.hasPlugin("decorators")) {
        this.unexpected();
    }
    const node = this.startNode();
    this.next();
    node.expression = this.parseMaybeAssign();
    return this.finishNode(node, "Decorator");
}