function() {
    const node = this.startNode();
    [node.typeAnnotation, node.predicate] = this.flowParseTypeAndPredicateInitialiser();
    return this.finishNode(node, "TypeAnnotation");
}