function(obj) {
    return Object.getOwnPropertySymbols(obj).map(function(sym) {
        return sym.toString();
    });
}