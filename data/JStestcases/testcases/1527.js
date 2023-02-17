function(resolve) {
    resolve({
        then: function() {
            throw 'hello';
        }
    });
}