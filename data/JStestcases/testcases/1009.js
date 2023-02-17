function() {
    eval(
        'if (true) function() { return "inner declaration"; } else ;after = f;\
    \
    function f() {\
      return "outer declaration";\
    }'
    );
}