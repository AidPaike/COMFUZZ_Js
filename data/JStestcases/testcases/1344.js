function(a, b) {
    var str = a + b; // Make a ConsString.
    var o = {};
    o[str]; // Turn it into a ThinString.
    return str;
}