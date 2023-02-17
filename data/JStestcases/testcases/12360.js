function(nextFunc, returnFunc, throwFunc) {
    return {
        [Symbol.iterator]: function() {
            var obj = {
                i: 1
            };
            if (nextFunc) {
                obj.next = nextFunc;
            }
            if (returnFunc) {
                obj.return = returnFunc;
            }
            if (throwFunc) {
                obj.throw = throwFunc;
            }
            return obj;
        }
    }
}