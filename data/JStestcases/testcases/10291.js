function() {
    var a = 1;
    try {
        throw -1;
    } catch { // catch scope
        let b = 2;
        (function g() {
            var c = 3;
            a;
            b;
            c; /**bp:locals(1)**/
        })();
    }
}