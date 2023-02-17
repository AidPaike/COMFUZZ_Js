function() {
    var x = 1; // context allocate x
    (() => x);
    (function() {
        var x = 2; // stack allocate shadowing x
        (function() {
            { // context allocate x in a nested scope
                let x = 3;
                (() => x);
            }
            debugger;
        })();
    })();
}