function(node) {
    var entries = ['.', '..']
    for (var key in node.contents) {
        if (!node.contents.hasOwnProperty(key)) {
            continue;
        }
        entries.push(key);
    }
    return entries;
}