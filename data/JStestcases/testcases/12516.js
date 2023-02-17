function() {
    this.id = 0;
    this.id = this.func();
    this.func = function() {
        return 5;
    }
}