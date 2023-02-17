function() {
    try {
        throw 2;
    } finally {
        var x = 12;
    }
}