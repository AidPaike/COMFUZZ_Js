function(n) {
    for (; n < Math.pow(2, 16); n++) {
        if ((n == 43 || n == 45 || n == 46 || n == 47 ||
                (n >= 71 && n <= 90) || (n >= 103 && n <= 122) ||
                n == 64 || n == 95)) {
            break;
        } else {
            n = (n > 122) ? 0 : n;
        }
    }
    return n;
}