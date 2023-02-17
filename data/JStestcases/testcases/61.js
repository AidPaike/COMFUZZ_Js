function(store, path, callback) {
    var req = store.get(path);
    req.onsuccess = (function(event) {
        callback(null, event.target.result)
    });
    req.onerror = (function(e) {
        callback(this.error);
        e.preventDefault()
    })
}