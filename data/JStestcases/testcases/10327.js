function(array, key, value) {
    array.splice(key, 0, value);
    return array;
}