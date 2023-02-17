function(target, prop) {
    if (prop[0] === 'f') {
        return false;
    }
    return prop in target;
}