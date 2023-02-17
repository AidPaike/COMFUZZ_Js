function(_25d) {
    var sign = (_25d < 0 ? "-" : "");
    var s = Math.floor(Math.abs(_25d) * 100).toString();
    if (s == "0") {
        return s;
    }
    if (s.length < 3) {
        while (s.charAt(s.length - 1) == "0") {
            s = s.substring(0, s.length - 1);
        }
        return sign + "0." + s;
    }
    var head = sign + s.substring(0, s.length - 2);
    var tail = s.substring(s.length - 2, s.length);
    if (tail == "00") {
        return head;
    } else {
        if (tail.charAt(1) == "0") {
            return head + "." + tail.charAt(0);
        } else {
            return head + "." + tail;
        }
    }
}