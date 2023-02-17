function(object) {
    var result = [];
    for (var i in object)
        result.push(i);
    return result;
}