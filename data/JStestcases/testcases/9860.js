function() {
    eval(
        'assert.throws(ReferenceError, function() {\
      f;\
    }, "An initialized binding is not created prior to evaluation");\
    assert.sameValue(\
      typeof f,\
      "undefined",\
      "An uninitialized binding is not created prior to evaluation"\
    );\
    \
    for (let f; ; ) {switch (1) {' +
        '  case 1:' +
        '    function() {  }' +
        '}\
    break;\
    }\
    \
    assert.throws(ReferenceError, function() {\
      f;\
    }, "An initialized binding is not created following evaluation");\
    assert.sameValue(\
      typeof f,\
      "undefined",\
      "An uninitialized binding is not created following evaluation"\
    );'
    );
}