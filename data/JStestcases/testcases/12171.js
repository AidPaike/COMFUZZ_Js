function(value, fun, exception) {
    this.value = value;
    this.exception = exception;
    this.valueOf = new Function("return this.value");
    this.check = fun;
}