function(d1, d2) {
    if (d1 === d2) {
        return true;
    } else if (Math.abs(Date.parse(d1) - Date.parse(d2)) <= 1000) {
        return true;
    } else {
        return false;
    }
}