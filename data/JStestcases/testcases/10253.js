function() {
    eval('function bar(a) {}' +
        '(function() {' +
        '  for (let c = 0; c < 505; c++) {' +
        '    while (Promise >= 0xDEADBEEF) {' +
        '      Array.prototype.slice.call(bar, bar, bar);' +
        '    }' +
        '    for (let i = 0; i < 413; i++) {' +
        '    }' +
        '  }' +
        '})();' +
        'largeAllocToTriggerGC();');
}