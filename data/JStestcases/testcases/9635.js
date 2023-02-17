function(value) {
    return new Promise(function(resolve, reject) {
        Promise.resolve().then(function() {
            reject(value);
        });
    });
}