function(o, l) {
    while (l !== null) {
        if (l.car === o)
            return l;
        l = l.cdr;
    }
    return false;
}