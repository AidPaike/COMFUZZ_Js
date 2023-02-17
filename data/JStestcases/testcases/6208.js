function(bin) {
    var r = 0;
    for (var l = bin.length; l < 32; l++) {
        bin = "0" + bin;
    }
    for (var j = 0; j < 31; j++) {
        r += Math.pow(2, j) * Number(bin.charAt(31 - j));
    }
    return r;
}