function() {
    function foo2(a, b, c, d) {
        return a + b + c
    }

    function bar1(e) {
        foo2(e, 2, 1, 4, 5, "")
    }

    function bar2(e) {
        foo2(e, 2, 3, 4, 5)
    }
    return [bar1, bar2]
}