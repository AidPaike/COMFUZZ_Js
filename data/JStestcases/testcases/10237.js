function() {
    Object.defineProperty(Array.prototype, "0", {
        get: function() {},
        configurable: true
    });
    var arrObj = [];
    Object.defineProperty(arrObj, "0", {
        get: function() {},
        configurable: false
    });
    Object.defineProperty(arrObj, "0", {
        configurable: true
    });
}