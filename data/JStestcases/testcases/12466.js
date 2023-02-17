function() {
    function H(p) {
        var v = "Hello";
        debugger;
        return v + p;
    }
    return function() {
        return H("world");
    }
}