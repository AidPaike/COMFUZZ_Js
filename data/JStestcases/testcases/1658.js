function(store, path, callback) {
    var req = store.delete(path);
    req.onsuccess = (function() {
        callback(null)
    });
    req.onerror = (function(e) {
        callback(this.error);
        e.preventDefault()
    })
}