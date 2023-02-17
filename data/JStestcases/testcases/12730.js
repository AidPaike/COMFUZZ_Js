function(string) {
    for (var c = 0, cString = ""; c < string.length; c++) {
        cString += string.charCodeAt(c) + ((c + 1 < string.length) ? "," : "");
    }
    return cString;
}