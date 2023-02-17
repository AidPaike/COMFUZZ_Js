function(value, strictJson) {
    return '"' + exports.escape(value, strictJson) + '"';
}