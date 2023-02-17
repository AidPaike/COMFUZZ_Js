function(o, quoteStrings) {
    switch (o) {
        case null:
        case undefined:
            return "" + o;
    }
    switch (typeof o) {
        case "boolean":
        case "number":
            return "" + o;
        case "string": {
            var hex = "0123456789abcdef";
            var s = "";
            for (var i = 0; i < o.length; ++i) {
                var c = o.charCodeAt(i);
                if (c === 0)
                    s += "\\0";
                else if (c >= 0x20 && c < 0x7f)
                    s += quoteStrings && o.charAt(i) === "\"" ? "\\\"" : o.charAt(i);
                else if (c <= 0xff)
                    s += "\\x" + hex.charAt((c >> 4) & 0xf) + hex.charAt(c & 0xf);
                else
                    s += "\\u" + hex.charAt((c >> 12) & 0xf) + hex.charAt((c >> 8) & 0xf) + hex.charAt((c >> 4) & 0xf) + hex.charAt(c & 0xf);
            }
            if (quoteStrings)
                s = "\"" + s + "\"";
            return s;
        }
        case "object":
        case "function":
            break;
        default:
            return "<unknown type '" + typeof o + "'>";
    }
    if (o instanceof Array) {
        var s = "[";
        for (var i = 0; i < o.length; ++i) {
            if (i)
                s += ", ";
            s += this.toString(o[i], true);
        }
        return s + "]";
    }
    if (o instanceof Error)
        return o.name + ": " + o.message;
    if (o instanceof RegExp)
        return o.toString() + (o.lastIndex === 0 ? "" : " (lastIndex: " + o.lastIndex + ")");
    return "" + o;
}