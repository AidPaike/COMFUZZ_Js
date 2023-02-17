function(obj) {
    Object.defineProperty(obj, "1", {
        get: function() {
            throw "error"
        }
    })
}