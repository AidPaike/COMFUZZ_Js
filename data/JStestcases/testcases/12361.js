function(value) {
    this.array = value.split(",");
    this.length = this.array.length;
    for (var i = 0; i < this.length; i++) {
        this[i] = eval(this.array[i]);
    }
    this.join = Array.prototype.reverse;
    this.getClass = Object.prototype.toString;
}