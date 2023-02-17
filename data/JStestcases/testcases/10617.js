function(tests) {
    var nOK = 0;
    var nNotOK = 0;
    var nTodo = 0;
    for (var i = 0; i < tests.length; ++i) {
        var test = tests[i];
        if (test.todo && !test.result) {
            nTodo++;
        } else if (test.result && !test.todo) {
            nOK++;
        } else {
            nNotOK++;
        }
    }
    return {
        "OK": nOK,
        "notOK": nNotOK,
        "todo": nTodo
    };
}