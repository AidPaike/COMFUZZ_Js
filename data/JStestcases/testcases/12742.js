function(node, newSize) {
    if (node.usedBytes == newSize) return;
    if (newSize == 0) {
        node.contents = null;
        node.usedBytes = 0;
        return
    }
    if (!node.contents || node.contents.subarray) {
        var oldContents = node.contents;
        node.contents = new Uint8Array(new ArrayBuffer(newSize));
        if (oldContents) {
            node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes)))
        }
        node.usedBytes = newSize;
        return
    }
    if (!node.contents) node.contents = [];
    if (node.contents.length > newSize) node.contents.length = newSize;
    else
        while (node.contents.length < newSize) node.contents.push(0);
    node.usedBytes = newSize
}