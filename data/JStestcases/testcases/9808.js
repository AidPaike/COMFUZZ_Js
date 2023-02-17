function(chr) {
    if (chr >= 97 && chr <= 122) {
        return chr - 97 + 65;
    } else {
        return chr;
    }
}