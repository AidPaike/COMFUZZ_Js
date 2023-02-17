function(array, callable, thisObj) {
    var rv = [];
    rv.length = array.length;
    for (var i = 0; i < array.length; i++) {
        if (array.hasOwnProperty(i)) {
            rv[i] = callable.call(thisObj, array[i], i, array);
        }
    }
    return rv;
}