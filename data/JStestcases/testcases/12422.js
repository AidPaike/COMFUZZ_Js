function(self, obj /*, ...*/ ) {
    if (self === null) {
        self = {};
    }
    for (var i = 1; i < arguments.length; i++) {
        var o = arguments[i];
        for (var k in o) {
            if (!(k in self)) {
                self[k] = o[k];
            }
        }
    }
    return self;
}