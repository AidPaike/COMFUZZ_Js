function() {
    eval(
        'var f = 123;\
    init = f;if (false) function() {} else function f() {  }'
    );
}