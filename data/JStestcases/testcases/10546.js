function(s, L) {
    if (L <= s.length) {
        return s.substring(0, L);
    }
    while (s.length <= L / 2) {
        s += s;
    }
    return s + s.substring(0, L - s.length);
}