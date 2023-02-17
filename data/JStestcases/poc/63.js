function() {
    let protoWithIndexedAccessors = {};
    Object.defineProperty(protoWithIndexedAccessors, 1337, {
        get() {
            return 1337;
        }
    });

    function helper(i) {
        let a = new Array;
        if (i > 0) {
            Object.setPrototypeOf(a, protoWithIndexedAccessors);
        }
        return a;
    }
    for (let i = 1; i < 10000; i++) {
        helper(i);
    }
    return helper(0);
}