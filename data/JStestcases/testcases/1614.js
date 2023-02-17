function() {
    var a = {
        b: 1
    };
    a["b"] += (a["b"] += 1);
    return a["b"];
}