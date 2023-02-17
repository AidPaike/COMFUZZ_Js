function() {
    eval(
        'init = f;\
    f = 123;\
    changed = f;{ function() {  } }'
    );
}