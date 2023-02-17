function() {
    var slot = "foo";
    return function(a) {
        return slot === a;
    }
}