function() {
    eval(
        '{\
      function() {\
        return "first declaration";\
      }\
    }{ function f() { return "second declaration"; } }updated = f;'
    );
}