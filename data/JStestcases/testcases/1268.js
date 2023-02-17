function() {
    eval(
        'init = f;\
    f = 123;\
    changed = f;switch (1) {' +
        '  default:' +
        '    function() {  }' +
        '}\
    '
    );
}