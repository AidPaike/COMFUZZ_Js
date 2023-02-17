function(n) {
    var nasty = [];
    while (n--)
        nasty.push("a" + 0);
    return Function.apply(null, nasty);
}