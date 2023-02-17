function(handler) {
    return new Proxy(function() {}, handler);
}