function(obj) {
    var c;
    for (var prop in obj)
        ++c;
    return c;
}