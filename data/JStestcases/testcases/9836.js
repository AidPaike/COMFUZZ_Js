function() {
    function bar() {
        var anonVar = function() {
            throw new Error("helloworld");
        }
        anonVar();
    }
    bar();
}