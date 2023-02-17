function() {
    eval(
        'switch (1) {' +
        '  case 1:' +
        '    function() { return "function declaration"; }' +
        '}\
    after = f;\
    \
    var f = 123;'
    );
}