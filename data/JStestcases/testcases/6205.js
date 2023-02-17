function( /* ... */ ) {
    for (var i = 0; i < arguments.length; i++) {
        var o = arguments[i];
        if (!(typeof(o) == 'undefined' || o === null)) {
            return false;
        }
    }
    return true;
}