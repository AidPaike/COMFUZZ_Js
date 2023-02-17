function() {
    return ((function() {
        return typeof this;
    })() === "undefined") && ((typeof this) === "undefined");
}