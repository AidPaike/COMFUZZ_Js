function() {
    eval(
        'switch (1) {' +
        '  case 1:' +
        '    function() { return "declaration"; }' +
        '}\
    after = f;'
    );
}