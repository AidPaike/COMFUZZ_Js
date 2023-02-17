function() {
    function foo(...[bar]) {
        function child() {
            bar;
        }
        child();
    }
    foo();
}