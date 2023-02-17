function(str, _265) {
    str = str + "";
    if (typeof(str) != "string") {
        return null;
    }
    if (!_265) {
        return str.replace(/\s+$/, "");
    } else {
        return str.replace(new RegExp("[" + _265 + "]+$"), "");
    }
}