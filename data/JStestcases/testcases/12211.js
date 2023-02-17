function() {
    var x = "yes!";

    function inner() {
        eval('WScript.Echo(x); x = "no!"');
    }

    function inner2() {
        return eval('inner');
    }
    return inner2();
}