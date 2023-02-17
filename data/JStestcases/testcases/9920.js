function(a, b) {
    if (typeof b === "object") {
        return b.equals(a); // (*)
    }
    return a === b;
}