function() {
    const a = 1;

    function level2Func() {
        eval("print(a)");
    }
    level2Func();
}