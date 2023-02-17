function(o) {
    this.pCount = 0;
    for (var p in o) {
        this.pCount++;
        this[p] = o[p];
    }
}