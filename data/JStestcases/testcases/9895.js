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
    for (let f of [0]) {switch (1) {' +
        '  default:' +
        '    function() {  }' +
        '}\
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