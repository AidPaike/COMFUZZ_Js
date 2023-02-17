function(n) {
    var source = '(function f(){';
    for (var i = 0; i < n; i++) {
        if (i != 0) source += ';';
        source += '"x"';
    }
    source += '})()';
    eval(source);
}