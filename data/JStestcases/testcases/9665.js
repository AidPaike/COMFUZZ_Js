function() {
    function foo() {
        bar;
    }
    foo();
    let bar = this;
}