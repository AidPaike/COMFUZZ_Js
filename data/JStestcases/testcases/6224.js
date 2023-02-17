function() {
    eval(
        'init = f;if (true) function() { return "inner declaration"; } else function _f() {}function f() {\
      return "outer declaration";\
    }'
    );
}