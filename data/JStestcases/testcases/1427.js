function(x, y, z) {
    arguments.__defineGetter__("5", function() {
        return 0;
    });
    delete arguments[5];
    return arguments[2];
}