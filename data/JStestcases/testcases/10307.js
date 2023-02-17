function(value) {
    this.value = value;
    this.valueOf = new Function("return this.value");
    this.toString = new Function("return this.value +''");
}