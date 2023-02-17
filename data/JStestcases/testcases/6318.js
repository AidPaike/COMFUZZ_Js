function(target, source) {
    var key;
    for (key in source) {
        if (exports.object.has(source, key)) {
            if (typeof source[key] == "object" && exports.object.has(target, key)) {
                exports.object.deepUpdate(target[key], source[key]);
            } else {
                target[key] = source[key];
            }
        }
    }
}