function() {
    var corners = this.options.corners;
    if (this._hasString(corners, "all", "bottom")) {
        return "";
    }
    var has_bl = (corners.indexOf('bl') != -1);
    var has_br = (corners.indexOf('br') != -1);
    if (has_bl && has_br) {
        return "";
    }
    if (has_bl) {
        return "left";
    }
    if (has_br) {
        return "right";
    }
    return "";
}