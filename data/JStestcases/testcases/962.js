function() {
    eval(
        'var f = 123;\
    init = f;if (true) function() {  } else function _f() {}'
    );
}