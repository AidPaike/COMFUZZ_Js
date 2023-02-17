function() {
    eval(
        'var f = 123;\
    init = f;switch (1) {' +
        '  default:' +
        '    function() {  }' +
        '}\
    '
    );
}