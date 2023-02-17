function() { // slot array scope
    var foo0 = 12;

    function f() { // null dummy scope
        try {
            throw new Error("1 Error");
        } catch (e1) { // catch scope
            e1;
            foo0;
            (function g() {
                e1;
                /**bp:stack();locals(1)**/
            })();
        }
    }
    f();
}