function(param, func) {
    function func() {
        return param;
    }
    return func();
}