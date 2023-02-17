function(array) {
    if (!Array.isArray(array))
        return exports.array(array);
    return array;
}