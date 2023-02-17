function(n) {
    n = Number(n);
    var h = "0x";
    for (var i = 3; i >= 0; i--) {
        if (n >= Math.pow(16, i)) {
            var t = Math.floor(n / Math.pow(16, i));
            n -= t * Math.pow(16, i);
            if (t >= 10) {
                if (t == 10) {
                    h += "A";
                }
                if (t == 11) {
                    h += "B";
                }
                if (t == 12) {
                    h += "C";
                }
                if (t == 13) {
                    h += "D";
                }
                if (t == 14) {
                    h += "E";
                }
                if (t == 15) {
                    h += "F";
                }
            } else {
                h += String(t);
            }
        } else {
            h += "0";
        }
    }
    return h;
}