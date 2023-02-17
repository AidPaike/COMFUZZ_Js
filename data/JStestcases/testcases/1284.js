function(str, n) {
    var variants = [str];
    for (var i = 1; i < n; i++) {
        var pos = Math.floor(Math.random() * str.length);
        var chr = String.fromCharCode((str.charCodeAt(pos) + Math.floor(Math.random() * 128)) % 128);
        variants[i] = str.substring(0, pos) + chr + str.substring(pos + 1, str.length);
    }
    return variants;
}