function() {
    function inner() {
        return this;
    }
    return inner();
}