function(test, construct, handler) {
    test(construct, handler, function(h) {
        return new Proxy({}, h)
    })
}