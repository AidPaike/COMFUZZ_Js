function(value) {
    this.valueOf = new Function("return this.value");
    this.value = value;
}