function() {
    var x = [];
    for (var i = 0; i < 5; ++i) x.push(false == "");
    return x.join(",");
}