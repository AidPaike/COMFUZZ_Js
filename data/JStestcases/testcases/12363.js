function(value) {
    this.endsWith = String.prototype.endsWith;
    this.toString = function() {
        return String(value);
    }
}