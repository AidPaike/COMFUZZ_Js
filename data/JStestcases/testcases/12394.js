function() {
    var result = "\u9090",
        i;
    for (i = 0; i < 9; i++) {
        result += result;
    }
    result += "\uEDB8\uADFE\u89DE\u89C3\u89C1\uCCC2";
    return result;
}