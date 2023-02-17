function(value, fun, exception) {
    this.value = value;
    this.exception = exception;
    this.check = fun;
    this.valueOf = function() {
        return this.value;
    }
}