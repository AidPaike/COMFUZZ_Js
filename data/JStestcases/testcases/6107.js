function() {
    for (var i = 5; i < 10;) {
        if (i < 0) return false;
        if (i === 7) return true;
        i -= -1;
    }
    return false;
}