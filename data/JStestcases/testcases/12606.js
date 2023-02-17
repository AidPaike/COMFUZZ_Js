function(aNumber, precision) {
    var res = Math.floor(aNumber).toFixed(0);
    if (aNumber < 0) {
        res = Math.ceil(aNumber).toFixed(0);
        if (res.charAt(0) != "-" && precision > 0) {
            res = "-" + res;
        }
    }
    if (res.indexOf("e") < 0 && precision > 0) {
        var tail = aNumber.toString();
        if (tail.indexOf("e") > 0) {
            tail = ".";
        } else if (tail.indexOf(".") < 0) {
            tail = ".";
        } else {
            tail = tail.substring(tail.indexOf("."));
        }
        if (tail.length - 1 > precision) {
            tail = tail.substring(0, precision + 1);
        }
        while (tail.length - 1 < precision) {
            tail += "0";
        }
        res += tail;
    }
    return res;
}