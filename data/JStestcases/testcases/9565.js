function(source) {
    eval('var x = 1');

    function f() {
        eval('eval(' + source + ')');
    }
    f();
}