function() {
    var f = function() {
        a = 2;
        return 1;
    }
    var a = 1;
    eval('WScript.Echo(a + (f() + a));');
}