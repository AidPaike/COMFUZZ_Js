function() {
    try {
        return eval(this.header('X-JSON'));
    } catch (e) {}
}