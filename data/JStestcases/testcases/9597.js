function(f) {
    if (!f.apply) return;
    for (var i = 0; i < this.length; i++) {
        f.apply(this[i], [i, this]);
    }
}