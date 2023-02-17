function() {
    var p = Promise.resolve(0).then(function onResolve() {
        p.catch(() => {}); // lazily added catch on the currently executing promise
        throw new Error('error for handledPromiseRejection8_bugbug');
    });
}