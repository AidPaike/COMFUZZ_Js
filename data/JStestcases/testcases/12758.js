function() {
    var corners = this.options.corners;
    if (this._hasString(corners, "all", "top")) {
        return "";
    }
    var has_tl = (corners.indexOf("tl") != -1);
    var has_tr = (corners.indexOf("tr") != -1);
    if (has_tl && has_tr) {
        return "";
    }
    if (has_tl) {
        return "left";
    }
    if (has_tr) {
        return "right";
    }
    return "";
}