function(value) {
    this.value = value;
    this.stringValue = value + "";
    this.numberValue = Number(value);
    return this;
}