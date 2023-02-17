function( /* typ */ ) {
    var types = {};
    for (var i = 0; i < arguments.length; i++) {
        var typ = arguments[i];
        types[typ] = typ;
    }
    return function() {
        for (var i = 0; i < arguments.length; i++) {
            if (!(typeof(arguments[i]) in types)) {
                return false;
            }
        }
        return true;
    };
}