function(store, path, entry, callback) {
    var req = store.put(entry, path);
    req.onsuccess = (function() {
        callback(null)
    });
    req.onerror = (function(e) {
        callback(this.error);
        e.preventDefault()
    })
}