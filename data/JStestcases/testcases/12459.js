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
    try {\
      throw {};\
    } catch ({ f }) {if (true) function() {  }}\
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