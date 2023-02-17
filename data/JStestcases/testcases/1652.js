function() {
    var v0 = function() {
        this.a;
    };
    var v1 = class extends v0 {
        constructor() {
            super();
        }
    };
    Reflect.construct(v1, [], RegExp);
}