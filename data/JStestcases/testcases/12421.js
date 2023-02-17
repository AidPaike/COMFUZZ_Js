function(s) {
    var up = Math.floor((s.length + 3) / 4);
    var h = 0;
    for (var i = 0; 4 * i - 3 < s.length; i += 4) {
        for (var j = 0; j < 4 && i + j < s.length; ++j)
            h = (h + s.charCodeAt(i + j) << (8 * j)) | 0;
    }
    return h;
}