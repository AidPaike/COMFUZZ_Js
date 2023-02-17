function() {
    var args = arguments;
    var af = _ => {
        return arguments;
    };
    return args === af();
}