function(value) {
    this.type = typeof value;
    this.value = value;
    this.javaclass = value.getClass();
    return this;
}