function(value) {
    this.type = typeof value;
    this.javaclass = value.getClass();
    return this;
}