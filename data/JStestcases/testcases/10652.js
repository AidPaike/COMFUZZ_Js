function() { // slot array scope
    var fa = 123;
    try {
        throw -1;
    } catch (e1) { // catch scope
        e1;
        (function g() {
            var ga = 40;
            fa;
            ga;
            e1;
            /**bp:stack();locals(1)**/
        })();
    }
}