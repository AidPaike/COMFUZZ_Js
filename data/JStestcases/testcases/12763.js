function(val, idx, obj) {
    if (idx === 0) {
        return val === 9;
    } else if (idx === 1) {
        return val === 11;
    } else {
        return false;
    }
}