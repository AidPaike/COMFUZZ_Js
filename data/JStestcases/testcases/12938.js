function() {
    Object.create({}, {
        prop: {
            get: function() {},
            writable: true
        }
    });
}