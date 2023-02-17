function(value) {
    this.toString = new Function("return new Number(666)");
    this.value = value;
    this.valueOf = new Function("return this.value");
}