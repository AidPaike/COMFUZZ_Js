function(a) {
    function bar(p) {
        if (p) {
            var x = a; // It's dead and unreachable, and it involves a GetScopeVar(GetScopeRegisters(GetMyScope())).
        }
        return 5;
    }
    return bar;
}