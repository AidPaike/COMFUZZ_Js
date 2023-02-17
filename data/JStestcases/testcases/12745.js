function() {
    eval(
        'init = f;{ function() { return "inner declaration"; } }function f() {\
      return "outer declaration";\
    }'
    );
}