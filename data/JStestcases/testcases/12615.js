function() {
    eval(
        'init = f;\
    \
    {\
      function() {}\
    }switch (1) {' +
        '  default:' +
        '    function f() {  }' +
        '}\
    '
    );
}