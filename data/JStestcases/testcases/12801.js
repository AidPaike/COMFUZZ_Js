function(f) {
    return f.call.apply(f.bind, arguments);
}