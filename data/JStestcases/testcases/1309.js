function() {
    if (this.index > 0) {
        this.index--
    } else {
        this.index = this.entryCount - 1;
    }
}