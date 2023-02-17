function(resolve) {
    new Promise(function(resolve) {
            resolve();
        })
        .then(function() {
            resolve();
        });
}