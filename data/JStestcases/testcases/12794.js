function() {
    eval(
        'let f = 123;\
    init = f;if (true) function() {  } else ;after = f;'
    );
}