function(msg) {
    return new Promise(function(resolve, reject) {
        Promise.resolve().then(function() {
            resolve(msg);
        });
    });
}