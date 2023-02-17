function(s, radix) {
    if (s === "") return false;
    if (radix) {
        var t = parseInt(s, radix);
        if (!t && t !== 0) return false;
        var allowedChars = "01234567890abcdefghijklmnopqrstuvwxyz".substring(0, radix + 1);
        if ((new RegExp("^[" + allowedChars + "]*$", "i")).test(s))
            return t;
        else return false;
    } else {
        var t = +s; // does not ignore trailing chars.
        if (!t && t !== 0) return false;
        var c = s.charAt(0);
        if (+c === 0 && c !== "0") return false;
        return t;
    }
}