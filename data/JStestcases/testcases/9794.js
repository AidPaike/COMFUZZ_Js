function() {
    eval(
        '{\
      function() {\
        return "first declaration";\
      }\
    }if (true) function f() { return "second declaration"; }updated = f;'
    );
}