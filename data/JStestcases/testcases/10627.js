function(k, v) {
    if (k == "1")
        return function() {};
    return v;
}