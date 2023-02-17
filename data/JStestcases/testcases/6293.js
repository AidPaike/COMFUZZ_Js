function(constructor) {
    var resolve, reject;
    var promise = new constructor((res, rej) => {
        resolve = res;
        reject = rej
    });
    return {
        promise: promise,
        resolve: resolve,
        reject: reject
    };
}