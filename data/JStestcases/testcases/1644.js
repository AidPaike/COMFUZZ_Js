function() {
    for (var a = 0; a < 4; a++) {
        this.d[a] = this.d[a] + 1 | 0;
        if (this.d[a]) break
    }
    return this.s.encrypt(this.d)
}