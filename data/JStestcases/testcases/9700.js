function(aFromAddress, aToAddress, aEdgeName) {
    let fromObject = this.ensureObject(aFromAddress);
    let toObject = this.ensureObject(aToAddress);
    fromObject.edges.push({
        name: aEdgeName,
        to: toObject
    });
    toObject.owners.push({
        name: aEdgeName,
        from: fromObject
    });
    this.edges.push({
        name: aEdgeName,
        from: fromObject,
        to: toObject
    });
}