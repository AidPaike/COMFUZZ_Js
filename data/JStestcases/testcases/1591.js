function() {
    function lazy(p = (function() {}, class {}, function() {}, class {
        method1() {}
    })) {}
    lazy();
}