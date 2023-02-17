function() {
    function bar(a) {
        return 'call'
    }

    function test() {
        return this;
    }

    function foo() {
        test[bar('1')](this);
        test.call(this);
    }
    foo()
    foo()
    foo()
}