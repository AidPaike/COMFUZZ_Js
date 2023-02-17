function() {
    Object.defineProperty(this, "x", {
        set: function() {},
        get: function() {}
    });
    this.a = function() {
        return 1;
    }
}