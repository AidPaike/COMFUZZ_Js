function(element) {
    if (element == 0) {
        throw new Error("zero");
    }
    return element < 0;
}