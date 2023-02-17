function(f) {
    eval(
        'init = f;switch (1) {' +
        '  default:' +
        '    function() {  }' +
        '}\
    after = f;'
    );
}