function(array) {
    var didRun = false;
    array[0] = {
        valueOf() {
            didRun = true;
            return 42;
        }
    };
    return {
        didRun,
        array
    };
}