function() {
    for (let prop in this)
        delete this[prop];
}