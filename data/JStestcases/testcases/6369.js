function() {
    eval(
        'let f = 123;\
    init = f;if (true) function() {  } else function _f() {}after = f;'
    );
}