function(a, b) {
    a = (new this.M(this.l[0])).update(a, b).finalize();
    return (new this.M(this.l[1])).update(a).finalize()
}