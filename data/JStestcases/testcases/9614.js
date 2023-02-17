function(string, n) {
    return exports.range(n).map(function() {
        return string;
    }).join('');
}