function(val, idx, obj) {
    if (idx === 0) {
        return typeof val === "undefined";
    }
    return false;
}