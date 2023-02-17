function(id) {
    return `function f() {
    function innerF() {
      for (var i = 0; i < 2; ++i) tag\`Hello${id}world\`;
    }
    return innerF();
  }
  f();`;
}