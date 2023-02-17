function() {
    function foo({
            x = 10
        }, /**loc(firstparam)**/
        a,
        [y = 1] = [2]) /**bp:setnext('firstparam');removeExpr();**/ {
        var m = x + y;
        return m; /**bp:evaluate('m == 12');**/
    }
    foo({})
}