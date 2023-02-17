function() {
    try {
        throw function() {
            return this;
        }
    } catch (e) {
        return e();
    }
}