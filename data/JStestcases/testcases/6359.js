function() {
    return (this.length == 1) ? this : Array.prototype.toLocaleString.call(this);
}