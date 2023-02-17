function(msg) {
    for (var k in this.listeners) {
        var pair = this.listeners[k];
        if (pair.ident != k || (pair[0] && !pair[0](msg))) {
            continue;
        }
        pair[1](msg);
    }
}