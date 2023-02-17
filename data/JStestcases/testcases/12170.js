function() {
    var outerResolve;
    var outerReject;
    let promise = new Promise((resolve, reject) => {
        outerResolve = resolve;
        outerReject = reject;
    });
    Promise.resolve(promise);
    return {
        resolve: outerResolve,
        reject: outerReject,
        then: (f, g) => promise.then(f, g)
    };
}