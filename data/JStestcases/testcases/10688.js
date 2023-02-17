function(id) {
    return `function f() {
    for (var i = 0; i < 2; ++i) tag\`Hello${id}world\`;
  }
  f();`;
}