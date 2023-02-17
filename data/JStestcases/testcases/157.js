function(f) {
    eval(
        'init = f;if (true) function() {  } else function _f() {}after = f;'
    );
}