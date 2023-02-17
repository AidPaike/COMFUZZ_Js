function(val) {
    this.value = val;
    this.valueOf = function() {
        return this.value;
    }
}