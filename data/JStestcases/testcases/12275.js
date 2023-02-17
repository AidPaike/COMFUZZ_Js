function(x) {
    try {
        try {
            return x;
        } catch (o) {
            return -1;
        }
    } catch (o) {
        return -2;
    }
}