function(N) {
    var chainTop = null;
    for (var i = 0; i != N; ++i) {
        var f = Function('some_arg' + i, ' return /test/;');
        var re = f();
        re.previous = chainTop;
        chainTop = f;
    }
    return chainTop;
}