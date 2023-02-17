function() {
    function inner() {
        (function f() {
            eval("");
        })();
    }
    inner();
}