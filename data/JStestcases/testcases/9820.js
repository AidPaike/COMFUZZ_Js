function() {
    var a = "a";
    return a in (a = "b", {
        a: 1
    });
}