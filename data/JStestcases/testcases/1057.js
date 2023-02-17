function(name, message) {
    if (!this.eatContextual(name)) this.unexpected(null, message);
}