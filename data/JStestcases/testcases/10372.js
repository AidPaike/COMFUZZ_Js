function(p, v) {
    if (p == "a") {
        this.b = {
            get x() {
                return null
            },
            set x(_) {
                throw 666
            }
        }
    }
    return v;
}