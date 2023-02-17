function(proto) {
    Object.defineProperties(proto, {
        name: {
            value: "SHOULD_NOT_enumerate_prototype"
        },
        0: {
            get: function() {
                return "get 0";
            }
        },
        3: {
            value: 3
        },
        1: {
            get: function() {
                return "get 1";
            },
            enumerable: true
        },
        5: {
            value: 5,
            enumerable: true
        },
        2: {
            get: function() {
                return this.name;
            },
            enumerable: true
        },
    });
    return Object.create(proto, {
        name: {
            value: "correct_original_instance"
        },
        10: {
            get: function() {
                return "get 10";
            }
        },
        13: {
            value: 13
        },
        11: {
            get: function() {
                return "get 11";
            },
            enumerable: true
        },
        15: {
            value: 15,
            enumerable: true
        },
        12: {
            get: function() {
                return this.name;
            },
            enumerable: true
        },
    });
}