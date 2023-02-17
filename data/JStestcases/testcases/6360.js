function(o) {
    try {
        for (var x in o) {}
        return false;
    } catch (e) {
        return true;
    }
}