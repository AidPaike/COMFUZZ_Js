function(a, f) {
    if (((a | 0) >>> 0) > ((f() | 0) >>> 0))
        return true;
    else
        return false;
}