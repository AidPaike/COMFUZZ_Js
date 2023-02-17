function(stdlib, foreign, heap) {
    "use asm";
    var xx = foreign.a | 0;
    var yy = foreign.b | 0;

    function f() {
        var x = 0;
        var y = 0;
        var z = 0;
        var w = 0;
        if (xx) {
            x = yy ? 43 : 44;
            y = ((x | 0) == 43) ? 45 : 46;
            z = ((y | 0) == 45) ? 47 : 48;
            w = ((z | 0) == 47) ? 49 : 50;
        } else {
            x = yy ? 53 : 54;
            y = ((x | 0) == 53) ? 55 : 56;
            z = ((y | 0) == 55) ? 57 : 58;
            w = ((z | 0) == 57) ? 59 : 60;
        }
        return w | 0;
    }
    return {
        f: f
    };
}