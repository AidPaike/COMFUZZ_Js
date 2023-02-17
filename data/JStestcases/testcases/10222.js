function(n) {
    var source = '(function f' + n + '(';
    for (var arg = 0; arg < n; arg++) {
        if (arg != 0) source += ',';
        source += 'arg' + arg;
    }
    source += ') { })()';
    eval(source);
}