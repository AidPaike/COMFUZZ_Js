function(source, load, test) {
    eval(source);

    function f() {
        var y = 23;

        function g() {
            var z = 25;

            function h() {
                eval(load);
                eval(test);
            }
            h();
        }
        g();
    }
    f();
}